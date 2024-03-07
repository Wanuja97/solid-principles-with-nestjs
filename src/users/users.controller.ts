import { Controller, Get, Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // endpoint for create new user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // endpoint for retrieve all users
  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

}
