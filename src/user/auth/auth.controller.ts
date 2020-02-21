import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../../models/entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService:UsersService
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
