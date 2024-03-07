// AzureBlobStorageService
import { Injectable } from '@nestjs/common';
import { AbstractStorageService } from './abstractClasses/storage-service.abstract';


@Injectable()
export class AzureBlobStorageService implements AbstractStorageService{
  async upload(file: Express.Multer.File, containerName: string): Promise<string> {
    // Logic to upload file to Azure Blob Storage
    return 'azure_blob_url'; // Replace with actual URL
  }
}
