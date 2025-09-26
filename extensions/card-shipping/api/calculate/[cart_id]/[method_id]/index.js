/**
 * Card Shipping Calculator API
 * Calculates shipping cost for card products based on quantity rules
 */

const { select } = require('@evershop/postgres-query-builder');
const { pool } = require('@evershop/evershop/src/lib/postgres/connection');

module.exports = async (request, response) => {
  try {
    const { cart_id, method_id } = request.params;
    
    console.log(`🃏 Calculating card shipping for cart: ${cart_id}, method: ${method_id}`);
    
    // Get cart by UUID
    const cart = await select()
      .from('cart')
      .where('uuid', '=', cart_id)
      .load(pool);
      
    if (!cart) {
      return response.status(404).json({
        error: true,
        message: 'Cart not found'
      });
    }

    // Get all cart items that are cards
    const cardItems = await getCardItemsFromCart(cart);
    
    if (cardItems.length === 0) {
      // No cards in cart, return 0 (free shipping or let other methods handle it)
      return response.json({
        data: {
          cost: 0
        }
      });
    }

    // Calculate total card quantity
    const totalCardQuantity = cardItems.reduce((total, item) => {
      return total + parseInt(item.qty || 0);
    }, 0);

    console.log(`🃏 Found ${cardItems.length} card items with total quantity: ${totalCardQuantity}`);

    let shippingCost;
    
    // Apply card shipping rules
    if (totalCardQuantity <= 2) {
      // 1-2 cards: $1.99
      shippingCost = 1.99;
      console.log(`🃏 ${totalCardQuantity} cards ≤ 2 = $1.99 shipping`);
    } else {
      // 3+ cards: $5.99 per block of 12
      const blocks = Math.ceil(totalCardQuantity / 12);
      shippingCost = blocks * 5.99;
      console.log(`🃏 ${totalCardQuantity} cards = ${blocks} blocks × $5.99 = $${shippingCost}`);
    }

    return response.json({
      data: {
        cost: shippingCost
      }
    });
    
  } catch (error) {
    console.error('❌ Error calculating card shipping:', error);
    return response.status(500).json({
      error: true,
      message: 'Error calculating shipping cost'
    });
  }
};

/**
 * Get cart items that are cards
 * @param {Object} cart - Cart object
 * @returns {Array} - Array of card items
 */
async function getCardItemsFromCart(cart) {
  try {
    // Query cart items with product information
    const query = select()
      .from('cart_item')
      .leftJoin('product', 'product.product_id', '=', 'cart_item.product_id')
      .leftJoin('product_attribute_value_index', 'product_attribute_value_index.product_id', '=', 'product.product_id')
      .leftJoin('attribute', 'attribute.attribute_id', '=', 'product_attribute_value_index.attribute_id')
      .where('cart_item.cart_id', '=', cart.cart_id);

    const items = await query.execute(pool);
    
    // Group items by cart_item_id to avoid duplicates from joins
    const itemsMap = new Map();
    items.forEach(item => {
      if (!itemsMap.has(item.cart_item_id)) {
        itemsMap.set(item.cart_item_id, {
          cart_item_id: item.cart_item_id,
          product_id: item.product_id,
          product_name: item.product_name,
          sku: item.sku,
          qty: item.qty,
          attributes: []
        });
      }
      
      // Add attribute information
      if (item.attribute_code && item.option_text) {
        itemsMap.get(item.cart_item_id).attributes.push({
          code: item.attribute_code,
          value: item.option_text
        });
      }
    });
    
    // Filter items that are cards
    const cardItems = Array.from(itemsMap.values()).filter(item => {
      return isCardProduct(item);
    });

    return cardItems;
  } catch (error) {
    console.error('❌ Error fetching card items:', error);
    return [];
  }
}

/**
 * Determine if a product is a card
 * @param {Object} item - Cart item with product data
 * @returns {Boolean} - True if product is a card
 */
function isCardProduct(item) {
  // Method 1: Check if product has "type" attribute with value "card"
  const typeAttribute = item.attributes.find(attr => attr.code === 'type');
  if (typeAttribute && typeAttribute.value.toLowerCase() === 'card') {
    console.log(`🃏 Found card product by type attribute: ${item.product_name}`);
    return true;
  }

  // Method 2: Check if product name/SKU contains "card" (fallback)
  const productName = (item.product_name || '').toLowerCase();
  const productSku = (item.sku || '').toLowerCase();
  
  if (productName.includes('card') || productSku.includes('card')) {
    console.log(`🃏 Found card product by name/SKU: ${item.product_name}`);
    return true;
  }

  return false;
}
