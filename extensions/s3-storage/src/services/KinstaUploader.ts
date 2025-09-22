const fs = require('fs/promises');
const path = require('path');
const { randomBytes } = require('crypto');

class KinstaUploader {
  private config: any;
  private storagePath: string;

  constructor(config: any) {
    this.config = config;
    // Use persistent storage path if provided, otherwise use default media path
    this.storagePath = config.persistentStoragePath || '/app/media';
  }

  async upload(files: any[], destinationPath: string): Promise<any[]> {
    const results: any[] = [];

    for (const file of files) {
      try {
        // Generate unique path structure similar to EverShop's default
        const randomDir1 = randomBytes(4).toString('hex');
        const randomDir2 = randomBytes(4).toString('hex');
        
        const relativePath = path.join(destinationPath, randomDir1, randomDir2, file.filename);
        const fullPath = path.join(this.storagePath, relativePath);
        
        // Ensure directory exists
        await fs.mkdir(path.dirname(fullPath), { recursive: true });
        
        // Write file to persistent storage
        await fs.writeFile(fullPath, file.buffer);

        // Generate the public URL
        let publicUrl: string;
        if (this.config.cdnUrl) {
          // Use Kinsta CDN URL if configured
          publicUrl = `${this.config.cdnUrl}/assets/${relativePath.replace(/\\/g, '/')}`;
        } else if (this.config.publicUrl) {
          // Use custom public URL if configured
          publicUrl = `${this.config.publicUrl}/assets/${relativePath.replace(/\\/g, '/')}`;
        } else {
          // Fallback to relative URL (will be served by EverShop's static middleware)
          publicUrl = `/assets/${relativePath.replace(/\\/g, '/')}`;
        }

        results.push({
          name: file.filename,
          mimetype: file.mimetype,
          size: file.size,
          url: publicUrl,
          path: relativePath.replace(/\\/g, '/'),
        });

        console.log(`✅ Uploaded ${file.filename} to Kinsta storage: ${publicUrl}`);
      } catch (error) {
        console.error(`❌ Failed to upload ${file.filename} to Kinsta storage:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Failed to upload ${file.filename}: ${errorMessage}`);
      }
    }

    return results;
  }

  async delete(filePath: string): Promise<void> {
    try {
      const fullPath = path.join(this.storagePath, filePath);
      await fs.unlink(fullPath);
      console.log(`✅ Deleted file from Kinsta storage: ${filePath}`);
    } catch (error) {
      console.error(`❌ Failed to delete file from Kinsta storage:`, error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to delete ${filePath}: ${errorMessage}`);
    }
  }

  async list(dirPath: string): Promise<{ folders: string[]; files: Array<{ url: string; name: string }> }> {
    try {
      const fullPath = path.join(this.storagePath, dirPath);
      const entries = await fs.readdir(fullPath, { withFileTypes: true });
      
      const folders: string[] = [];
      const files: Array<{ url: string; name: string }> = [];

      for (const entry of entries) {
        if (entry.isDirectory()) {
          folders.push(entry.name);
        } else {
          const relativePath = path.join(dirPath, entry.name);
          let publicUrl: string;
          
          if (this.config.cdnUrl) {
            publicUrl = `${this.config.cdnUrl}/assets/${relativePath.replace(/\\/g, '/')}`;
          } else if (this.config.publicUrl) {
            publicUrl = `${this.config.publicUrl}/assets/${relativePath.replace(/\\/g, '/')}`;
          } else {
            publicUrl = `/assets/${relativePath.replace(/\\/g, '/')}`;
          }

          files.push({
            url: publicUrl,
            name: entry.name,
          });
        }
      }

      return { folders, files };
    } catch (error) {
      console.error(`❌ Failed to list files in Kinsta storage:`, error);
      return { folders: [], files: [] };
    }
  }
}

module.exports = { KinstaUploader };
