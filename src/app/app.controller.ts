import { Controller, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user.find-id')
  async findById(@Payload(ValidationPipe) ID: string) {
    console.log(ID)
    return await this.appService.findById(parseInt(ID))
  }

  @EventPattern('user.update')
  async update(@Payload(ValidationPipe) user: any) {
    return await this.appService.update(user)
  }
}
