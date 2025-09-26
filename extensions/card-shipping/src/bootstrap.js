module.exports = () => {
  console.log('🃏 Card Shipping Extension loaded');

  // The extension is loaded, but the API route will be created separately
  // This ensures the extension loads without import errors
};

/**
 * API endpoint to calculate shipping cost for card products
 * Rules:
 * - 1-2 cards: $1.99
 * - 3+ cards: $5.99 per block of 12 cards
 *
 * @param {Object} request - Express request object
 * @param {Object} response - Express response object
 */
async function calculateCardShippingAPI(request, response) {
  try {
    const { cart_id, method_id } = request.params;

    // Get cart by UUID
    const { select } = require('@evershop/postgres-query-builder');
    const { pool } = require('@evershop/evershop/src/lib/postgres/connection');

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

    console.log(`🃏 Calculating shipping for ${totalCardQuantity} cards`);

    let shippingCost;

    // Apply card shipping rules
    if (totalCardQuantity <= 2) {
      // 1-2 cards: $1.99
      shippingCost = 1.99;
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
}

/**
 * Get cart items that are cards
 * @param {Object} cart - Cart object
 * @returns {Array} - Array of card items
 */
async function getCardItemsFromCart(cart) {
  const { select } = require('@evershop/postgres-query-builder');
  const { pool } = require('@evershop/evershop/src/lib/postgres/connection');

  try {
    // Query cart items with product information
    const query = select()
      .from('cart_item')
      .leftJoin('product', 'product.product_id', '=', 'cart_item.product_id')
      .leftJoin('product_attribute_value_index', 'product_attribute_value_index.product_id', '=', 'product.product_id')
      .leftJoin('attribute', 'attribute.attribute_id', '=', 'product_attribute_value_index.attribute_id')
      .where('cart_item.cart_id', '=', cart.cart_id);

    const items = await query.execute(pool);
    
    // Filter items that are cards
    const cardItems = items.filter(item => {
      // Check if product has "card" type attribute or is in card category
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
  if (item.attribute_code === 'type' && item.option_text === 'card') {
    return true;
  }

  // Method 2: Check if product name/SKU contains "card" (fallback)
  const productName = (item.product_name || '').toLowerCase();
  const productSku = (item.sku || '').toLowerCase();
  
  if (productName.includes('card') || productSku.includes('card')) {
    return true;
  }

  // Method 3: Check if product is in a "cards" category (you can implement this)
  // if (item.category_name && item.category_name.toLowerCase().includes('card')) {
  //   return true;
  // }

  return false;
}
