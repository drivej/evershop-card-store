import 'dotenv/config';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

// Admin creation script for remote database
async function createAdmin() {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || process.env.DB_DATABASE,
    user: process.env.DB_USER || process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSLMODE === 'require' ? { rejectUnauthorized: false } : false
  });

  try {
    // Hash the password using EverShop's method
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync('admin123', salt);
    
    // Check if admin user already exists
    const existingUser = await pool.query(
      'SELECT admin_user_id FROM admin_user WHERE email = $1',
      ['admin@kinsta.com']
    );

    if (existingUser.rows.length > 0) {
      // Update existing user
      await pool.query(
        'UPDATE admin_user SET password = $1, full_name = $2, status = true WHERE email = $3',
        [hashedPassword, 'Kinsta Admin', 'admin@kinsta.com']
      );
      console.log('✅ Updated existing admin user: admin@kinsta.com');
    } else {
      // Create new admin user
      await pool.query(
        'INSERT INTO admin_user (email, password, full_name, status) VALUES ($1, $2, $3, $4)',
        ['admin@kinsta.com', hashedPassword, 'Kinsta Admin', true]
      );
      console.log('✅ Created new admin user: admin@kinsta.com');
    }

    console.log('📧 Email: admin@kinsta.com');
    console.log('🔑 Password: admin123');
    
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await pool.end();
  }
}

createAdmin();
