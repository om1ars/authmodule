import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from "./users.service";
import * as bcrypt from 'bcrypt';
import { User } from "./user.model";

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/signup')
  async createUser(
    @Body('password') password: string,
    @Body('username') username: string,
  ): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.createUser(
      username,
      hashedPassword,
    );
    return result;
  }
}