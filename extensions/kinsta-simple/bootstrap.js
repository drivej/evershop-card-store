const fs = require('fs/promises');
const path = require('path');
const { randomBytes } = require('crypto');

// Simple Kinsta storage handler that just uses local storage
// This prevents the 503 error when FILE_STORAGE=kinsta
module.exports = () => {
  console.log('🚀 Simple Kinsta storage extension loaded (using local storage)');
  
  // We don't register any processors - just let the default local storage work
  // This prevents the "kinsta storage handler not found" error
};
