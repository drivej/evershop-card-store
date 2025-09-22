interface S3Config {
    region: string;
    bucket: string;
    accessKeyId: string;
    secretAccessKey: string;
    cdnUrl?: string;
}
interface UploadFile {
    filename: string;
    buffer: Buffer;
    mimetype: string;
    size: number;
}
interface UploadResult {
    name: string;
    mimetype: string;
    size: number;
    url: string;
    path: string;
}
export declare class S3Uploader {
    private s3Client;
    private config;
    constructor(config: S3Config);
    upload(files: UploadFile[], destinationPath: string): Promise<UploadResult[]>;
    delete(filePath: string): Promise<void>;
    list(path: string): Promise<{
        folders: string[];
        files: Array<{
            url: string;
            name: string;
        }>;
    }>;
}
export {};
