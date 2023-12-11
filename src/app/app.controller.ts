import { Controller, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OptionsDTO } from 'src/shared/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user.find-id')
  async findById(@Payload(ValidationPipe) {ID}: {ID: number}) {
    return await this.appService.findById(ID)
  }

  @MessagePattern('user.get-all')
  async getAllUsers(@Payload(ValidationPipe) options: OptionsDTO) {
    console.log(options)
    return await this.appService.getAllUsers(options)
  }

  @MessagePattern('user.find-nearby')
  async findNearBy() {
    console.log("finding nearby")
    return await this.appService.findNearBy()
  }

  @EventPattern('user.update')
  async update(@Payload(ValidationPipe) user: any) {
    return await this.appService.update(user)
  }
}
