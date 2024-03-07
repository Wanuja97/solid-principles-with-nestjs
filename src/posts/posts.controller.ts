import { Controller, Get, Post, Body, UseInterceptors, UploadedFile} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, createBlogPostDto } from './dto/create-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // endpoint for create new post
  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  // endpoint for retrieve all posts
  @Get()
  findAllPosts() {
    return this.postsService.findAllPosts();
  }


  // This method implemented for demonstrate Dependency Inversion Principle
  @Post('/dip')
  @UseInterceptors(FileInterceptor('coverPhoto'))
  async createBlogPost(
    @UploadedFile() coverPhoto: Express.Multer.File,
    @Body() createBlogPostDto:createBlogPostDto
  ): Promise<any> {
    
    return this.postsService.createBlogPost(coverPhoto, createBlogPostDto);
  }

}
