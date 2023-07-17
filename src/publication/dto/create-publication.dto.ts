import {IsString, IsNotEmpty, IsOptional} from 'class-validator'
import { IsAmericanDateFormat } from './american-date.decorator';

export class CreatePublicationDto {
    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    @IsNotEmpty()
    @IsAmericanDateFormat()
    dateToPublish: string;

    published: boolean;
    
    @IsString()
    @IsNotEmpty()
    socialMedia: string;

    @IsOptional()
    userId: number;
}

/* - [ ]  image deve ser string não vazia
- [ ]  title deve ser string não vazia
- [ ]  text deve ser string não vazia
- [ ]  dateToPublish deve ser string com uma data no formato americano `"2022-05-14"`
- [ ]  published deve conter `false` como padrão (`@default()` do prisma)
- [ ]  socialMedia deve ser string não vazia
- [ ]  userId deve ser inserido com o id do user logado */