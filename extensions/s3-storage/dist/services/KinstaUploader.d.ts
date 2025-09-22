interface KinstaConfig {
    cdnUrl?: string;
    persistentStoragePath?: string;
    publicUrl?: string;
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
export declare class KinstaUploader {
    private config;
    private storagePath;
    constructor(config: KinstaConfig);
    upload(files: UploadFile[], destinationPath: string): Promise<UploadResult[]>;
    delete(filePath: string): Promise<void>;
    list(dirPath: string): Promise<{
        folders: string[];
        files: Array<{
            url: string;
            name: string;
        }>;
    }>;
}
export {};
