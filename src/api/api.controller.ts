import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  findAll() {
    console.log('find All');
    return this.apiService.findAll();
  }

}
