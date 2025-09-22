import { getConfig } from '@evershop/evershop/dist/lib/util/getConfig.js';
import { addProcessor } from '@evershop/evershop/dist/lib/util/registry.js';
import { S3Uploader } from './services/S3Uploader.js';
export default (()=>{
    // Register S3 file uploader if S3 storage is configured
    addProcessor('fileUploader', (current)=>{
        const config = getConfig('system.file_storage');
        if (config === 's3') {
            const s3Config = getConfig('system.s3', {});
            if (!s3Config.region || !s3Config.bucket || !s3Config.accessKeyId || !s3Config.secretAccessKey) {
                console.warn('⚠️  S3 storage is enabled but configuration is incomplete. Falling back to local storage.');
                return current;
            }
            const s3Uploader = new S3Uploader({
                region: s3Config.region,
                bucket: s3Config.bucket,
                accessKeyId: s3Config.accessKeyId,
                secretAccessKey: s3Config.secretAccessKey,
                cdnUrl: s3Config.cdnUrl
            });
            console.log('🚀 S3 storage initialized:', {
                region: s3Config.region,
                bucket: s3Config.bucket,
                cdnUrl: s3Config.cdnUrl || 'Default S3 URL'
            });
            return {
                upload: s3Uploader.upload.bind(s3Uploader)
            };
        }
        return current;
    });
    // Register S3 file deleter
    addProcessor('fileDeleter', (current)=>{
        const config = getConfig('system.file_storage');
        if (config === 's3') {
            const s3Config = getConfig('system.s3', {});
            if (!s3Config.region || !s3Config.bucket || !s3Config.accessKeyId || !s3Config.secretAccessKey) {
                return current;
            }
            const s3Uploader = new S3Uploader({
                region: s3Config.region,
                bucket: s3Config.bucket,
                accessKeyId: s3Config.accessKeyId,
                secretAccessKey: s3Config.secretAccessKey,
                cdnUrl: s3Config.cdnUrl
            });
            return {
                delete: s3Uploader.delete.bind(s3Uploader)
            };
        }
        return current;
    });
    // Register S3 file browser
    addProcessor('fileBrowser', (current)=>{
        const config = getConfig('system.file_storage');
        if (config === 's3') {
            const s3Config = getConfig('system.s3', {});
            if (!s3Config.region || !s3Config.bucket || !s3Config.accessKeyId || !s3Config.secretAccessKey) {
                return current;
            }
            const s3Uploader = new S3Uploader({
                region: s3Config.region,
                bucket: s3Config.bucket,
                accessKeyId: s3Config.accessKeyId,
                secretAccessKey: s3Config.secretAccessKey,
                cdnUrl: s3Config.cdnUrl
            });
            return {
                list: s3Uploader.list.bind(s3Uploader)
            };
        }
        return current;
    });
});
