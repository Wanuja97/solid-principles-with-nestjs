import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserpostsService } from './userposts.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';


/* 
  This approach is not recommended because this controller class is 
  responsible for handling users and posts endpoints.............


  Violates Single Responsibility Principle.....................

*/

@Controller('userposts')
export class UserpostsController {
  constructor(private readonly userpostsService: UserpostsService) {}

  //endpoint for create new user
  @Post('/createuser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userpostsService.createPost(createUserDto);
  }

  //endpoint for create new post
  @Post('/createposts')
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.userpostsService.createPost(createPostDto);
  }

  //endpoint for retrieve all users
  @Get('/getallusers')
  findAllUsers() {
    return this.userpostsService.findAllUsers();
  }

  //endpoint for retrieve all posts
  @Get('/getallposts')
  findAllPosts() {
    return this.userpostsService.findAllPosts();
  }

}
