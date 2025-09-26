import 'dotenv/config';
import { Pool } from 'pg';

// Simple shipping setup that should definitely work
async function setupSimpleShipping() {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || process.env.DB_DATABASE,
    user: process.env.DB_USER || process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSLMODE === 'require' ? { rejectUnauthorized: false } : false
  });

  try {
    console.log('🚚 Setting up Simple Shipping (guaranteed to work)...');

    // 1. Ensure US shipping zone exists
    let usZone = await pool.query(
      'SELECT * FROM shipping_zone WHERE country = $1',
      ['US']
    );

    if (usZone.rows.length === 0) {
      console.log('📍 Creating US shipping zone...');
      const result = await pool.query(
        'INSERT INTO shipping_zone (name, country) VALUES ($1, $2) RETURNING *',
        ['United States', 'US']
      );
      usZone = result;
    } else {
      console.log('📍 Using existing US shipping zone');
    }

    const usZoneId = usZone.rows[0].shipping_zone_id;

    // 2. Create simple shipping methods
    const methods = [
      { name: 'Standard Shipping', cost: 9.99 },
      { name: 'Card Shipping (Fixed)', cost: 1.99 },
      { name: 'Free Shipping', cost: 0 }
    ];

    for (const methodData of methods) {
      // Check if method exists
      let method = await pool.query(
        'SELECT * FROM shipping_method WHERE name = $1',
        [methodData.name]
      );

      let methodId;
      if (method.rows.length === 0) {
        console.log(`🚚 Creating ${methodData.name} method...`);
        const result = await pool.query(
          'INSERT INTO shipping_method (name) VALUES ($1) RETURNING *',
          [methodData.name]
        );
        methodId = result.rows[0].shipping_method_id;
      } else {
        console.log(`🚚 Using existing ${methodData.name} method`);
        methodId = method.rows[0].shipping_method_id;
      }

      // Link method to US zone
      const existing = await pool.query(
        'SELECT * FROM shipping_zone_method WHERE zone_id = $1 AND method_id = $2',
        [usZoneId, methodId]
      );

      if (existing.rows.length === 0) {
        console.log(`🔗 Linking ${methodData.name} to US zone...`);
        await pool.query(`
          INSERT INTO shipping_zone_method 
          (zone_id, method_id, is_enabled, cost) 
          VALUES ($1, $2, $3, $4)
        `, [usZoneId, methodId, true, methodData.cost]);
      } else {
        console.log(`🔗 Updating ${methodData.name} for US zone...`);
        await pool.query(`
          UPDATE shipping_zone_method 
          SET is_enabled = $1, cost = $2 
          WHERE zone_id = $3 AND method_id = $4
        `, [true, methodData.cost, usZoneId, methodId]);
      }
    }

    // 3. Show final configuration
    const finalConfig = await pool.query(`
      SELECT sz.name as zone_name, sm.name as method_name, 
             szm.is_enabled, szm.cost
      FROM shipping_zone_method szm
      JOIN shipping_zone sz ON sz.shipping_zone_id = szm.zone_id
      JOIN shipping_method sm ON sm.shipping_method_id = szm.method_id
      WHERE szm.is_enabled = true AND sz.country = 'US'
      ORDER BY sm.name
    `);

    console.log('');
    console.log('✅ Simple Shipping Setup Complete!');
    console.log('');
    console.log('📋 Active US Shipping Methods:');
    finalConfig.rows.forEach(config => {
      console.log(`  🚚 ${config.method_name} - $${config.cost}`);
    });

    console.log('');
    console.log('🎯 Testing Steps:');
    console.log('1. Add any product to cart');
    console.log('2. Go to checkout');
    console.log('3. Enter US shipping address');
    console.log('4. You should see shipping options');
    console.log('5. Select a shipping method');
    console.log('6. Verify shipping cost appears in total');

  } catch (error) {
    console.error('❌ Error setting up simple shipping:', error);
  } finally {
    await pool.end();
  }
}

setupSimpleShipping();
