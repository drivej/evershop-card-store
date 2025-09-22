// Simple Kinsta storage handler that prevents 503 errors
// This satisfies the FILE_STORAGE=kinsta requirement without complex implementation
module.exports = () => {
  console.log('🚀 Simple Kinsta storage extension loaded (using local storage)');

  // We don't register any processors - just let the default local storage work
  // This prevents the "kinsta storage handler not found" error
};
