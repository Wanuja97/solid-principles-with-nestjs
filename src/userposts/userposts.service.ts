import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

// This approach is not recommended, Because this service class responsible 
// for manage users and posts operations............

// Violates Single Responsibility Principle

@Injectable()
export class UserpostsService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new User';
  }

  createPost(createPostDto: CreatePostDto) {
    return 'This action adds a new Post';
  }

  findAllUsers() {
    return `This action returns all Users`;
  }

  findAllPosts() {
    return `This action returns all Posts`;
  }


}
