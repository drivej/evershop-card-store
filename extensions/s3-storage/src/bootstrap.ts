import { getConfig } from '@evershop/evershop/lib/util/getConfig';
import { addProcessor } from '@evershop/evershop/lib/util/registry';

export default () => {
  // Register file uploader based on storage configuration
  addProcessor('fileUploader', async (current: any) => {
    const config = getConfig('system.file_storage');

    if (config === 's3') {
      const s3Config = getConfig('system.s3', {}) as any;

      if (!s3Config.region || !s3Config.bucket || !s3Config.accessKeyId || !s3Config.secretAccessKey) {
        console.warn('⚠️  S3 storage is enabled but configuration is incomplete. Falling back to local storage.');
        return current;
      }

      const { S3Uploader } = await import('./services/S3Uploader.js');
      const s3Uploader = new S3Uploader({
        region: s3Config.region,
        bucket: s3Config.bucket,
        accessKeyId: s3Config.accessKeyId,
        secretAccessKey: s3Config.secretAccessKey,
        cdnUrl: s3Config.cdnUrl,
      });

      console.log('🚀 S3 storage initialized:', {
        region: s3Config.region,
        bucket: s3Config.bucket,
        cdnUrl: s3Config.cdnUrl || 'Default S3 URL',
      });

      return {
        upload: s3Uploader.upload.bind(s3Uploader),
      };
    }

    if (config === 'kinsta') {
      const kinstaConfig = getConfig('system.kinsta', {}) as any;

      const { KinstaUploader } = await import('./services/KinstaUploader.js');
      const kinstaUploader = new KinstaUploader({
        cdnUrl: kinstaConfig.cdnUrl,
        persistentStoragePath: kinstaConfig.persistentStoragePath,
        publicUrl: kinstaConfig.publicUrl,
      });

      console.log('🚀 Kinsta CDN storage initialized:', {
        cdnUrl: kinstaConfig.cdnUrl || 'Default application URL',
        persistentStoragePath: kinstaConfig.persistentStoragePath || '/app/media',
        publicUrl: kinstaConfig.publicUrl || 'Application domain',
      });

      return {
        upload: kinstaUploader.upload.bind(kinstaUploader),
      };
    }

    return current;
  });

  // Register file deleter based on storage configuration
  addProcessor('fileDeleter', async (current: any) => {
    const config = getConfig('system.file_storage');

    if (config === 's3') {
      const s3Config = getConfig('system.s3', {}) as any;

      if (!s3Config.region || !s3Config.bucket || !s3Config.accessKeyId || !s3Config.secretAccessKey) {
        return current;
      }

      const { S3Uploader } = await import('./services/S3Uploader.js');
      const s3Uploader = new S3Uploader({
        region: s3Config.region,
        bucket: s3Config.bucket,
        accessKeyId: s3Config.accessKeyId,
        secretAccessKey: s3Config.secretAccessKey,
        cdnUrl: s3Config.cdnUrl,
      });

      return {
        delete: s3Uploader.delete.bind(s3Uploader),
      };
    }

    if (config === 'kinsta') {
      const kinstaConfig = getConfig('system.kinsta', {}) as any;

      const { KinstaUploader } = await import('./services/KinstaUploader.js');
      const kinstaUploader = new KinstaUploader({
        cdnUrl: kinstaConfig.cdnUrl,
        persistentStoragePath: kinstaConfig.persistentStoragePath,
        publicUrl: kinstaConfig.publicUrl,
      });

      return {
        delete: kinstaUploader.delete.bind(kinstaUploader),
      };
    }

    return current;
  });

  // Register file browser based on storage configuration
  addProcessor('fileBrowser', async (current: any) => {
    const config = getConfig('system.file_storage');

    if (config === 's3') {
      const s3Config = getConfig('system.s3', {}) as any;

      if (!s3Config.region || !s3Config.bucket || !s3Config.accessKeyId || !s3Config.secretAccessKey) {
        return current;
      }

      const { S3Uploader } = await import('./services/S3Uploader.js');
      const s3Uploader = new S3Uploader({
        region: s3Config.region,
        bucket: s3Config.bucket,
        accessKeyId: s3Config.accessKeyId,
        secretAccessKey: s3Config.secretAccessKey,
        cdnUrl: s3Config.cdnUrl,
      });

      return {
        list: s3Uploader.list.bind(s3Uploader),
      };
    }

    if (config === 'kinsta') {
      const kinstaConfig = getConfig('system.kinsta', {}) as any;

      const { KinstaUploader } = await import('./services/KinstaUploader.js');
      const kinstaUploader = new KinstaUploader({
        cdnUrl: kinstaConfig.cdnUrl,
        persistentStoragePath: kinstaConfig.persistentStoragePath,
        publicUrl: kinstaConfig.publicUrl,
      });

      return {
        list: kinstaUploader.list.bind(kinstaUploader),
      };
    }

    return current;
  });
};
