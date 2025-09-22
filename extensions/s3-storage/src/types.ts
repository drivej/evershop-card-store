export interface S3Config {
  region: string;
  bucket: string;
  accessKeyId: string;
  secretAccessKey: string;
  cdnUrl?: string;
}

export interface KinstaConfig {
  cdnUrl?: string;
  persistentStoragePath?: string;
  publicUrl?: string;
}

export interface UploadFile {
  filename: string;
  buffer: Buffer;
  mimetype: string;
  size: number;
}

export interface UploadResult {
  name: string;
  mimetype: string;
  size: number;
  url: string;
  path: string;
}
