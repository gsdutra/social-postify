import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PublicationModule } from './publication/publication.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PublicationModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
