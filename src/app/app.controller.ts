import { Controller, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user.find-id')
  async findById(@Payload(ValidationPipe) {ID}: {ID: number}) {
    return await this.appService.findById(ID)
  }

  @EventPattern('user.update')
  async update(@Payload(ValidationPipe) user: any) {
    return await this.appService.update(user)
  }
}
