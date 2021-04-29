import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  all(): string {
    return this.appService.all();
  }
  @Post()
  new(): string {
    return this.appService.new();
  }
  @Put()
  update(): string {
    return this.appService.all();
  }
  @Delete()
  delete(): string {
    return this.appService.delete();
  }
}
