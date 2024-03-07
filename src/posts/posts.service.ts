import { Injectable } from '@nestjs/common';
import { CreatePostDto, createBlogPostDto } from './dto/create-post.dto';
import { AbstractStorageService } from 'src/StorageServices/abstractClasses/storage-service.abstract';

@Injectable()
export class PostsService {

  // Non-DIP Approach Constructor
  // constructor(private readonly azureBlobService: AzureBlobStorageService) {}

  // DIP-compliant Approach Constructor
  constructor(private readonly istorageService: AbstractStorageService) {}

  createPost(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAllPosts() {
    return `This action returns all posts`;
  }

  // This method implemented for demonstrate Dependency Inversion Principle
  async createBlogPost(coverPhoto: Express.Multer.File, createBlogPostDto: createBlogPostDto): Promise<any> {
   
    
    const coverPhotoUrl = await this.istorageService.upload(coverPhoto, 'blog-cover-photos');
    // Write a DB Query to Save blog post content along with cover photo URL
    console.log(this.istorageService.constructor.name);
    return { coverPhotoUrl, createBlogPostDto };
  }

}
