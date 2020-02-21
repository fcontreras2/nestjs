
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, BeforeInsert, InsertEvent } from 'typeorm';
import { User } from '../models/entities/User';
import { UserDto } from './auth/auth.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async insert(user:UserDto):Promise<void> {
    await this.usersRepository.save(user);
  }

  beforeInsert(event: InsertEvent<User>) {
    event.entity.updatedAt = new Date('now');
    event.entity.createdAt = new Date('now');
  }

}