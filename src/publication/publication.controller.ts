import { Controller, Req, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import CustomRequest from 'src/interfaces/custom-request.interface'
import { User } from 'src/decorators/user.decorator';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createPublicationDto: CreatePublicationDto, @User() user: any) {
    return this.publicationService.create({
      ...createPublicationDto,
      userId: Number(user.id)
    });
  }

  @UseGuards(AuthGuard)
  @Get()
  findByUserId(id: number) {
    return this.publicationService.findByUserId(id);
  }
}
