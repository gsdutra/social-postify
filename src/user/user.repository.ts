import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserRepository {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return;
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
