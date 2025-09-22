const fs = require('fs/promises');
const path = require('path');
const { randomBytes } = require('crypto');

// Get EverShop utilities
const getConfig = require('@evershop/evershop/dist/lib/util/getConfig.js').getConfig;
const addProcessor = require('@evershop/evershop/dist/lib/util/registry.js').addProcessor;

// Kinsta CDN storage handler
module.exports = () => {
  console.log('🚀 Kinsta CDN storage extension loaded');

  // Register file uploader for Kinsta CDN
  addProcessor('fileUploader', (current) => {
    const config = getConfig('system.file_storage');

    if (config === 'kinsta') {
      const kinstaConfig = getConfig('system.kinsta', {});

      console.log('🔧 Kinsta CDN configuration:', {
        cdnUrl: kinstaConfig.cdnUrl || 'Default application URL',
        persistentStoragePath: kinstaConfig.persistentStoragePath || '/app/media',
        publicUrl: kinstaConfig.publicUrl || 'Application domain',
      });

      return {
        upload: async (file) => {
          try {
            // Generate unique path for the file
            const randomDir1 = randomBytes(4).toString('hex');
            const randomDir2 = randomBytes(4).toString('hex');
            const relativePath = `catalog/${randomDir1}/${randomDir2}`;

            // Use Kinsta persistent storage path
            const storagePath = kinstaConfig.persistentStoragePath || '/app/media';
            const fullDir = path.join(storagePath, relativePath);
            const fileName = `${Date.now()}-${file.originalname}`;
            const fullPath = path.join(fullDir, fileName);

            // Ensure directory exists
            await fs.mkdir(fullDir, { recursive: true });

            // Write file to persistent storage
            await fs.writeFile(fullPath, file.buffer);

            // Generate CDN URL
            const cdnUrl = kinstaConfig.cdnUrl || kinstaConfig.publicUrl || 'https://your-app.kinsta.app';
            const publicUrl = `${cdnUrl}/assets/${relativePath}/${fileName}`;

            console.log('✅ File uploaded to Kinsta CDN:', {
              originalName: file.originalname,
              storedPath: fullPath,
              publicUrl: publicUrl
            });

            return {
              path: `${relativePath}/${fileName}`,
              url: publicUrl
            };
          } catch (error) {
            console.error('❌ Kinsta CDN upload error:', error);
            throw error;
          }
        }
      };
    }

    return current;
  });

  // Register file deleter for Kinsta CDN
  addProcessor('fileDeleter', (current) => {
    const config = getConfig('system.file_storage');

    if (config === 'kinsta') {
      const kinstaConfig = getConfig('system.kinsta', {});

      return {
        delete: async (filePath) => {
          try {
            const storagePath = kinstaConfig.persistentStoragePath || '/app/media';
            const fullPath = path.join(storagePath, filePath);

            await fs.unlink(fullPath);
            console.log('✅ File deleted from Kinsta storage:', fullPath);

            return true;
          } catch (error) {
            console.error('❌ Kinsta CDN delete error:', error);
            return false;
          }
        }
      };
    }

    return current;
  });

  // Register file browser for Kinsta CDN
  addProcessor('fileBrowser', (current) => {
    const config = getConfig('system.file_storage');

    if (config === 'kinsta') {
      const kinstaConfig = getConfig('system.kinsta', {});

      return {
        list: async (directory = '') => {
          try {
            const storagePath = kinstaConfig.persistentStoragePath || '/app/media';
            const fullDir = path.join(storagePath, directory);

            const files = await fs.readdir(fullDir, { withFileTypes: true });
            const cdnUrl = kinstaConfig.cdnUrl || kinstaConfig.publicUrl || 'https://your-app.kinsta.app';

            return files.map(file => ({
              name: file.name,
              isDirectory: file.isDirectory(),
              url: file.isDirectory() ? null : `${cdnUrl}/assets/${directory}/${file.name}`
            }));
          } catch (error) {
            console.error('❌ Kinsta CDN list error:', error);
            return [];
          }
        }
      };
    }

    return current;
  });
};
