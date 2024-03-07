export abstract class AbstractStorageService {
    abstract upload(file: Express.Multer.File, containerName: string): Promise<string>;
}
