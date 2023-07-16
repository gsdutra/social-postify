import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller("signin")
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post()
  async login(@Body() body: CreateAuthDto) {
    const { email, password } = body;
    return this.authService.login(email, password);
  }

}