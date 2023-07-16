import {IsString, IsEmail, IsNotEmpty, MinLength, MaxLength} from 'class-validator'

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;
  
	@IsNotEmpty()
	@IsString()
	@MaxLength(20)
	@MinLength(6)
	password: string;

	@IsNotEmpty()
	@IsString()
	avatar: string;
}
