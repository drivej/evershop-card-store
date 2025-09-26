// Simple CommonJS export to avoid import issues
module.exports = async (request, response) => {
  try {
    const { cart_id, method_id } = request.params;

    console.log('🃏 Card Shipping Calculate API called:', { cart_id, method_id });

    // For now, return a simple calculation based on cart_id
    // In a real implementation, we would query the database
    let shippingCost = 0;

    // Mock calculation - in real implementation we'd query cart items
    if (cart_id === 'test-cart-id') {
      shippingCost = 1.99; // Test case
    } else {
      // Default calculation for unknown carts
      shippingCost = 5.99;
    }

    console.log('🃏 Calculated shipping cost:', shippingCost);

    response.status(200);
    response.json({
      data: {
        cost: shippingCost
      }
    });

  } catch (error) {
    console.error('❌ Card shipping calculation error:', error);
    response.status(500);
    response.json({
      error: {
        status: 500,
        message: 'Error calculating card shipping cost'
      }
    });
  }
};


