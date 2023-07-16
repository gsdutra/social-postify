import {IsString, IsEmail, IsNotEmpty, IsStrongPassword, MaxLength} from 'class-validator'

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
	@IsStrongPassword({
		minLength: 6,
	})
	password: string;

	@IsNotEmpty()
	@IsString()
	avatar: string;
}
