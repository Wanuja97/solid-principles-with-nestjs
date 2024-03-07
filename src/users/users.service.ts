import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAllUsers() {
    return `This action returns all users`;
  }

}
