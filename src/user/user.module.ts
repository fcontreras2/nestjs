import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './user.service';
import { User } from 'src/models/entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UserModule {}
