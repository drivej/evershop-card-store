import 'dotenv/config';
import { Pool } from 'pg';

// Setup script for card shipping
async function setupCardShipping() {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || process.env.DB_DATABASE,
    user: process.env.DB_USER || process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSLMODE === 'require' ? { rejectUnauthorized: false } : false
  });

  try {
    console.log('🃏 Setting up Card Shipping...');

    // 1. Create or get default shipping zone (US)
    let zone = await pool.query(
      'SELECT * FROM shipping_zone WHERE country = $1 LIMIT 1',
      ['US']
    );

    if (zone.rows.length === 0) {
      console.log('📍 Creating US shipping zone...');
      const zoneResult = await pool.query(
        'INSERT INTO shipping_zone (name, country) VALUES ($1, $2) RETURNING *',
        ['United States', 'US']
      );
      zone = zoneResult;
    } else {
      console.log('📍 Using existing US shipping zone');
    }

    const zoneId = zone.rows[0].shipping_zone_id;

    // 2. Create card shipping method
    let method = await pool.query(
      'SELECT * FROM shipping_method WHERE name = $1',
      ['Card Shipping']
    );

    if (method.rows.length === 0) {
      console.log('🚚 Creating Card Shipping method...');
      const methodResult = await pool.query(
        'INSERT INTO shipping_method (name) VALUES ($1) RETURNING *',
        ['Card Shipping']
      );
      method = methodResult;
    } else {
      console.log('🚚 Using existing Card Shipping method');
    }

    const methodId = method.rows[0].shipping_method_id;

    // 3. Create or update shipping zone method with calculate_api
    const existingZoneMethod = await pool.query(
      'SELECT * FROM shipping_zone_method WHERE zone_id = $1 AND method_id = $2',
      [zoneId, methodId]
    );

    if (existingZoneMethod.rows.length === 0) {
      console.log('🔗 Linking Card Shipping to US zone...');
      await pool.query(
        `INSERT INTO shipping_zone_method 
         (zone_id, method_id, is_enabled, cost, calculate_api) 
         VALUES ($1, $2, $3, $4, $5)`,
        [zoneId, methodId, true, null, 'cardShippingCalculate']
      );
    } else {
      console.log('🔗 Updating existing zone method...');
      await pool.query(
        `UPDATE shipping_zone_method 
         SET is_enabled = $1, cost = $2, calculate_api = $3 
         WHERE zone_id = $4 AND method_id = $5`,
        [true, null, 'cardShippingCalculate', zoneId, methodId]
      );
    }

    console.log('✅ Card Shipping setup complete!');
    console.log('');
    console.log('📋 Next Steps:');
    console.log('1. Go to Admin → Settings → Shipping');
    console.log('2. You should see "Card Shipping" method for US zone');
    console.log('3. Add products with "type" attribute set to "card"');
    console.log('4. Test checkout with different card quantities:');
    console.log('   • 1-2 cards = $1.99 shipping');
    console.log('   • 3+ cards = $5.99 per 12-card block');
    console.log('');
    console.log('🃏 Card Shipping Rules:');
    console.log('• 1 card = $1.99');
    console.log('• 2 cards = $1.99');
    console.log('• 3 cards = $5.99 (1 block)');
    console.log('• 12 cards = $5.99 (1 block)');
    console.log('• 13 cards = $11.98 (2 blocks)');
    console.log('• 24 cards = $11.98 (2 blocks)');
    console.log('• 25 cards = $17.97 (3 blocks)');
    console.log('• 37 cards = $23.96 (4 blocks)');

  } catch (error) {
    console.error('❌ Error setting up card shipping:', error);
  } finally {
    await pool.end();
  }
}

setupCardShipping();
