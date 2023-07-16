import {IsString, IsEmail, IsNotEmpty, MinLength, MaxLength} from 'class-validator'

export class CreateAuthDto {

	@IsNotEmpty()
	@IsEmail()
	email: string;
  
	@IsNotEmpty()
	@IsString()
	@MaxLength(20)
	@MinLength(6)
	password: string;
    
}
