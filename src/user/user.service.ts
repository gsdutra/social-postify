import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return 'Success'
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
