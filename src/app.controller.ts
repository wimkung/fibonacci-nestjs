import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fibonacci/:count')
  getFibonacci(@Param('count') count: number): string {
    return this.appService.getFibonacci('1', '1', count);
  }
}
