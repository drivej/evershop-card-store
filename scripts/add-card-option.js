import 'dotenv/config';
import { Pool } from 'pg';

// Simple script to add card option to type attribute
async function addCardOption() {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || process.env.DB_DATABASE,
    user: process.env.DB_USER || process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSLMODE === 'require' ? { rejectUnauthorized: false } : false
  });

  try {
    console.log('🃏 Adding card option to type attribute...');

    // Get the type attribute (should exist from previous run)
    const attribute = await pool.query(
      'SELECT * FROM attribute WHERE attribute_code = $1',
      ['type']
    );

    if (attribute.rows.length === 0) {
      console.log('❌ Type attribute not found. Please run setup-product-type first.');
      return;
    }

    const attributeId = attribute.rows[0].attribute_id;
    console.log('✅ Found type attribute with ID:', attributeId);

    // Check if card option already exists
    const existingOption = await pool.query(
      'SELECT * FROM attribute_option WHERE attribute_id = $1 AND option_text = $2',
      [attributeId, 'card']
    );

    if (existingOption.rows.length > 0) {
      console.log('✅ Card option already exists');
    } else {
      // Add card option
      await pool.query(`
        INSERT INTO attribute_option (
          attribute_id,
          attribute_code,
          option_text
        ) VALUES ($1, $2, $3)
      `, [attributeId, 'type', 'card']);
      
      console.log('✅ Added card option');
    }

    // Show all options
    const allOptions = await pool.query(
      'SELECT option_text FROM attribute_option WHERE attribute_id = $1 ORDER BY option_text',
      [attributeId]
    );

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
    console.log('4. Test checkout to verify card shipping calculation');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await pool.end();
  }
}

addCardOption();
