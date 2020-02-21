import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../../models/entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../user.service';
import { UserDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private userService:UsersService
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async insert(@Body() user:UserDto):Promise<any> {
    return this.userService.insert(user);
  }

  @Delete(':id')
  async remove(@Param() params):Promise<any> {
    return this.userService.remove(params.id);
  }
}
