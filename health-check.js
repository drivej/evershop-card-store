import 'dotenv/config';

console.log('🔍 EverShop Health Check');
console.log('========================');

// Check environment variables
console.log('\n📋 Environment Variables:');
console.log('NODE_ENV:', process.env.NODE_ENV || 'not set');
console.log('PORT:', process.env.PORT || 'not set');
console.log('DB_HOST:', process.env.DB_HOST || 'not set');
console.log('DB_PORT:', process.env.DB_PORT || 'not set');
console.log('DB_NAME:', process.env.DB_NAME || 'not set');
console.log('DB_USER:', process.env.DB_USER || 'not set');
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***set***' : 'not set');
console.log('DB_SSLMODE:', process.env.DB_SSLMODE || 'not set');

// Test database connection
console.log('\n🔌 Testing Database Connection...');
try {
  const { Pool } = await import('pg');
  
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSLMODE === 'require' ? true : false,
    max: 3,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 30000,
  });

  const client = await pool.connect();
  const result = await client.query('SELECT version()');
  console.log('✅ Database connection successful!');
  console.log('📊 PostgreSQL version:', result.rows[0].version.split(' ')[0] + ' ' + result.rows[0].version.split(' ')[1]);
  
  client.release();
  await pool.end();
} catch (error) {
  console.log('❌ Database connection failed:', error.message);
  console.log('🔧 Error details:', error.code || 'Unknown error code');
}

console.log('\n✅ Health check complete');
process.exit(0);
