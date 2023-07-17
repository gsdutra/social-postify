import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PublicationRepository {

  constructor(private prisma: PrismaService) { }

  async create(data: CreatePublicationDto) {
    return this.prisma.publication.create({
      data,
    });
  }

  async findByUserId(userId: number) {
    return this.prisma.publication.findMany({
      where: {
        userId,
      }
    });
  }

}
