import 'dotenv/config';
import crypto from 'node:crypto';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const preferredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const fallbackEmail = 'admin@kinsta.com';

function randomChar(chars) {
  return chars[crypto.randomInt(chars.length)];
}

function generatePassword() {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghijkmnopqrstuvwxyz';
  const digits = '23456789';
  const symbols = '!@#$%&*?';
  const all = upper + lower + digits + symbols;
  const chars = [
    randomChar(upper),
    randomChar(lower),
    randomChar(digits),
    randomChar(symbols)
  ];

  while (chars.length < 24) {
    chars.push(randomChar(all));
  }

  for (let i = chars.length - 1; i > 0; i -= 1) {
    const j = crypto.randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join('');
}

function createPool() {
  return new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_NAME || process.env.DB_DATABASE,
    user: process.env.DB_USER || process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl:
      process.env.DB_SSLMODE === 'require'
        ? { rejectUnauthorized: false }
        : false
  });
}

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

async function loadAdminByEmail(pool, email) {
  const result = await pool.query(
    `SELECT admin_user_id, email, full_name, status
     FROM admin_user
     WHERE lower(email) = $1`,
    [email]
  );
  return result.rows[0];
}

async function chooseAdmin(pool) {
  if (preferredEmail) {
    return {
      admin: await loadAdminByEmail(pool, preferredEmail),
      emailForCreate: preferredEmail
    };
  }

  const fallbackAdmin = await loadAdminByEmail(pool, fallbackEmail);
  if (fallbackAdmin) {
    return { admin: fallbackAdmin, emailForCreate: fallbackEmail };
  }

  const result = await pool.query(
    `SELECT admin_user_id, email, full_name, status
     FROM admin_user
     ORDER BY admin_user_id ASC`
  );

  if (result.rows.length === 1) {
    return { admin: result.rows[0], emailForCreate: result.rows[0].email };
  }

  if (result.rows.length > 1) {
    const accounts = result.rows
      .map((user) => `- ${user.email} (${user.status ? 'active' : 'inactive'})`)
      .join('\n');
    throw new Error(
      `Multiple admin accounts found. Re-run with ADMIN_EMAIL set to one of:\n${accounts}`
    );
  }

  return { admin: null, emailForCreate: fallbackEmail };
}

async function resetAdminPassword() {
  const pool = createPool();
  const password = generatePassword();
  const passwordHash = hashPassword(password);

  try {
    const { admin, emailForCreate } = await chooseAdmin(pool);
    const result = admin
      ? await pool.query(
          `UPDATE admin_user
           SET password = $1, status = TRUE, updated_at = CURRENT_TIMESTAMP
           WHERE admin_user_id = $2
           RETURNING email, full_name, status`,
          [passwordHash, admin.admin_user_id]
        )
      : await pool.query(
          `INSERT INTO admin_user (email, password, full_name, status)
           VALUES ($1, $2, $3, TRUE)
           RETURNING email, full_name, status`,
          [emailForCreate, passwordHash, 'Store Admin']
        );

    const user = result.rows[0];
    console.log('Admin password reset complete.');
    console.log(`Email: ${user.email}`);
    console.log(`Password: ${password}`);
    console.log('The generated password was not written to the repository.');
  } finally {
    await pool.end();
  }
}

resetAdminPassword().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
