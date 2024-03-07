
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { AzureBlobStorageService } from 'src/StorageServices/azure-blob-storage.service';
import { AbstractStorageService } from 'src/StorageServices/abstractClasses/storage-service.abstract';
import { AmazonS3StorageService } from 'src/StorageServices/amazon-s3-storage.service';


@Module({
  imports:[],
  controllers: [PostsController],
  providers: [PostsService,
    {
      provide: AbstractStorageService,
      useClass: AzureBlobStorageService
    }],
}) 
export class PostsModule {}
