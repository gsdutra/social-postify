import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationRepository } from './publicationrepository';

@Injectable()
export class PublicationService {

  constructor(private readonly publicationRepository: PublicationRepository) { }

  create(createPublicationDto: CreatePublicationDto) {
    return this.publicationRepository.create(createPublicationDto);
  }

  findByUserId(userId: number) {
    return this.publicationRepository.findByUserId(userId);
  }

}
