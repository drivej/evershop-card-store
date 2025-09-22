import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
export class S3Uploader {
    constructor(config) {
        this.config = config;
        this.s3Client = new S3Client({
            region: config.region,
            credentials: {
                accessKeyId: config.accessKeyId,
                secretAccessKey: config.secretAccessKey,
            },
        });
    }
    async upload(files, destinationPath) {
        const results = [];
        for (const file of files) {
            try {
                const key = `${destinationPath}/${file.filename}`.replace(/^\/+/, '');
                const command = new PutObjectCommand({
                    Bucket: this.config.bucket,
                    Key: key,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                    CacheControl: 'max-age=31536000', // 1 year cache
                    Metadata: {
                        originalName: file.filename,
                        uploadedAt: new Date().toISOString(),
                    },
                });
                await this.s3Client.send(command);
                // Generate the public URL
                const baseUrl = this.config.cdnUrl || `https://${this.config.bucket}.s3.${this.config.region}.amazonaws.com`;
                const url = `${baseUrl}/${key}`;
                results.push({
                    name: file.filename,
                    mimetype: file.mimetype,
                    size: file.size,
                    url: url,
                    path: key,
                });
                console.log(`✅ Uploaded ${file.filename} to S3: ${url}`);
            }
            catch (error) {
                console.error(`❌ Failed to upload ${file.filename} to S3:`, error);
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                throw new Error(`Failed to upload ${file.filename}: ${errorMessage}`);
            }
        }
        return results;
    }
    async delete(filePath) {
        // Implementation for deleting files from S3
        // This would be used by EverShop's delete functionality
        console.log(`Deleting file from S3: ${filePath}`);
    }
    async list(path) {
        // Implementation for listing files in S3
        // This would be used by EverShop's file browser
        console.log(`Listing files in S3 path: ${path}`);
        return { folders: [], files: [] };
    }
}
