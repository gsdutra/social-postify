import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationRepository } from './publicationrepository';
import { PublicationController } from './publication.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'nestjs-prisma';
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [PublicationController],
  providers: [PublicationService, UserService, UserRepository, PublicationRepository]
})
export class PublicationModule {}
