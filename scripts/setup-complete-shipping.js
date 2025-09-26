import 'dotenv/config';
import { Pool } from 'pg';

// Complete shipping setup with multiple zones and methods
async function setupCompleteShipping() {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || process.env.DB_DATABASE,
    user: process.env.DB_USER || process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSLMODE === 'require' ? { rejectUnauthorized: false } : false
  });

  try {
    console.log('🌍 Setting up Complete Shipping Configuration...');

    // 1. Create shipping zones for major countries
    const zones = [
      { name: 'United States', country: 'US' },
      { name: 'Canada', country: 'CA' },
      { name: 'United Kingdom', country: 'GB' },
      { name: 'Rest of World', country: '*' } // Fallback zone
    ];

    const zoneIds = {};

    for (const zoneData of zones) {
      let zone = await pool.query(
        'SELECT * FROM shipping_zone WHERE country = $1',
        [zoneData.country]
      );

      if (zone.rows.length === 0) {
        console.log(`📍 Creating ${zoneData.name} zone...`);
        const result = await pool.query(
          'INSERT INTO shipping_zone (name, country) VALUES ($1, $2) RETURNING *',
          [zoneData.name, zoneData.country]
        );
        zoneIds[zoneData.country] = result.rows[0].shipping_zone_id;
      } else {
        console.log(`📍 Using existing ${zoneData.name} zone`);
        zoneIds[zoneData.country] = zone.rows[0].shipping_zone_id;
      }
    }

    // 2. Create shipping methods
    const methods = [
      { name: 'Card Shipping', api: 'cardShippingCalculate' },
      { name: 'Standard Shipping', cost: 9.99 },
      { name: 'Free Shipping', cost: 0 }
    ];

    const methodIds = {};

    for (const methodData of methods) {
      let method = await pool.query(
        'SELECT * FROM shipping_method WHERE name = $1',
        [methodData.name]
      );

      if (method.rows.length === 0) {
        console.log(`🚚 Creating ${methodData.name} method...`);
        const result = await pool.query(
          'INSERT INTO shipping_method (name) VALUES ($1) RETURNING *',
          [methodData.name]
        );
        methodIds[methodData.name] = result.rows[0].shipping_method_id;
      } else {
        console.log(`🚚 Using existing ${methodData.name} method`);
        methodIds[methodData.name] = method.rows[0].shipping_method_id;
      }
    }

    // 3. Link methods to zones
    const zoneMethodLinks = [
      // US Zone
      { zone: 'US', method: 'Card Shipping', cost: null, api: 'cardShippingCalculate' },
      { zone: 'US', method: 'Standard Shipping', cost: 9.99, api: null },
      { zone: 'US', method: 'Free Shipping', cost: 0, api: null },
      
      // Canada Zone  
      { zone: 'CA', method: 'Standard Shipping', cost: 14.99, api: null },
      { zone: 'CA', method: 'Free Shipping', cost: 0, api: null },
      
      // UK Zone
      { zone: 'GB', method: 'Standard Shipping', cost: 19.99, api: null },
      
      // Rest of World
      { zone: '*', method: 'Standard Shipping', cost: 24.99, api: null }
    ];

    for (const link of zoneMethodLinks) {
      const zoneId = zoneIds[link.zone];
      const methodId = methodIds[link.method];

      // Check if link already exists
      const existing = await pool.query(
        'SELECT * FROM shipping_zone_method WHERE zone_id = $1 AND method_id = $2',
        [zoneId, methodId]
      );

      if (existing.rows.length === 0) {
        console.log(`🔗 Linking ${link.method} to ${link.zone} zone...`);
        await pool.query(`
          INSERT INTO shipping_zone_method 
          (zone_id, method_id, is_enabled, cost, calculate_api) 
          VALUES ($1, $2, $3, $4, $5)
        `, [zoneId, methodId, true, link.cost, link.api]);
      } else {
        console.log(`🔗 Updating ${link.method} for ${link.zone} zone...`);
        await pool.query(`
          UPDATE shipping_zone_method 
          SET is_enabled = $1, cost = $2, calculate_api = $3 
          WHERE zone_id = $4 AND method_id = $5
        `, [true, link.cost, link.api, zoneId, methodId]);
      }
    }

    // 4. Show final configuration
    const finalConfig = await pool.query(`
      SELECT sz.name as zone_name, sz.country, sm.name as method_name, 
             szm.is_enabled, szm.cost, szm.calculate_api
      FROM shipping_zone_method szm
      JOIN shipping_zone sz ON sz.shipping_zone_id = szm.zone_id
      JOIN shipping_method sm ON sm.shipping_method_id = szm.method_id
      WHERE szm.is_enabled = true
      ORDER BY sz.name, sm.name
    `);

    console.log('');
    console.log('✅ Complete Shipping Setup Finished!');
    console.log('');
    console.log('📋 Active Shipping Configuration:');
    
    let currentZone = '';
    finalConfig.rows.forEach(config => {
      if (config.zone_name !== currentZone) {
        console.log(`\n🌍 ${config.zone_name} (${config.country}):`);
        currentZone = config.zone_name;
      }
      
      const cost = config.cost !== null ? `$${config.cost}` : 
                   config.calculate_api ? 'Dynamic (API)' : 'Free';
      console.log(`  🚚 ${config.method_name} - ${cost}`);
    });

    console.log('');
    console.log('🎯 Next Steps:');
    console.log('1. Go to checkout and add a shipping address');
    console.log('2. You should now see shipping options');
    console.log('3. For card products, select "Card Shipping"');
    console.log('4. Verify the shipping cost appears in cart total');

  } catch (error) {
    console.error('❌ Error setting up shipping:', error);
  } finally {
    await pool.end();
  }
}

setupCompleteShipping();
