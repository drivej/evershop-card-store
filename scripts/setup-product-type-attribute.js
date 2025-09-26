import 'dotenv/config';
import { Pool } from 'pg';

// Setup script for product type attribute
async function setupProductTypeAttribute() {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || process.env.DB_DATABASE,
    user: process.env.DB_USER || process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSLMODE === 'require' ? { rejectUnauthorized: false } : false
  });

  try {
    console.log('🏷️ Setting up Product Type Attribute...');

    // 1. Check if 'type' attribute already exists
    let attribute = await pool.query(
      'SELECT * FROM attribute WHERE attribute_code = $1',
      ['type']
    );

    let attributeId;

    if (attribute.rows.length === 0) {
      console.log('📝 Creating "type" attribute...');
      
      // Create the attribute
      const attributeResult = await pool.query(`
        INSERT INTO attribute (
          attribute_code, 
          attribute_name, 
          type, 
          is_required, 
          display_on_frontend, 
          sort_order, 
          is_filterable
        ) VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *
      `, [
        'type',           // attribute_code
        'Product Type',   // attribute_name  
        'select',         // type (dropdown)
        false,            // is_required
        true,             // display_on_frontend
        10,               // sort_order
        true              // is_filterable
      ]);
      
      attributeId = attributeResult.rows[0].attribute_id;
      console.log('✅ Created attribute with ID:', attributeId);
    } else {
      attributeId = attribute.rows[0].attribute_id;
      console.log('✅ Using existing "type" attribute with ID:', attributeId);
    }

    // 2. Check if 'card' option already exists
    const existingOption = await pool.query(
      'SELECT * FROM attribute_option WHERE attribute_id = $1 AND option_text = $2',
      [attributeId, 'card']
    );

    if (existingOption.rows.length === 0) {
      console.log('🃏 Adding "card" option...');
      
      await pool.query(`
        INSERT INTO attribute_option (
          attribute_id,
          attribute_code,
          option_text
        ) VALUES ($1, $2, $3)
      `, [
        attributeId,
        'type',
        'card'
      ]);
      
      console.log('✅ Added "card" option');
    } else {
      console.log('✅ "card" option already exists');
    }

    // 3. Add other common product types
    const otherTypes = ['accessory', 'collectible', 'merchandise'];

    for (const type of otherTypes) {
      const existing = await pool.query(
        'SELECT * FROM attribute_option WHERE attribute_id = $1 AND option_text = $2',
        [attributeId, type]
      );

      if (existing.rows.length === 0) {
        await pool.query(`
          INSERT INTO attribute_option (
            attribute_id,
            attribute_code,
            option_text
          ) VALUES ($1, $2, $3)
        `, [attributeId, 'type', type]);

        console.log(`✅ Added "${type}" option`);
      }
    }

    // 4. Show all available options
    const allOptions = await pool.query(
      'SELECT option_text FROM attribute_option WHERE attribute_id = $1 ORDER BY option_text',
      [attributeId]
    );

    console.log('');
    console.log('✅ Product Type Attribute Setup Complete!');
    console.log('');
    console.log('📋 Available Product Types:');
    allOptions.rows.forEach((option, index) => {
      const icon = option.option_text === 'card' ? '🃏' : '📦';
      console.log(`${icon} ${index + 1}. ${option.option_text}`);
    });
    
    console.log('');
    console.log('🎯 Next Steps:');
    console.log('1. Go to Admin → Catalog → Products');
    console.log('2. Create or edit a product');
    console.log('3. Set "Product Type" = "card" for card products');
    console.log('4. Save the product');
    console.log('5. Test checkout with card products to verify shipping calculation');
    console.log('');
    console.log('🃏 Card Shipping Rules:');
    console.log('• Products with type="card" will use special shipping rates');
    console.log('• 1-2 cards = $1.99 shipping');
    console.log('• 3+ cards = $5.99 per block of 12 cards');

  } catch (error) {
    console.error('❌ Error setting up product type attribute:', error);
  } finally {
    await pool.end();
  }
}

setupProductTypeAttribute();
