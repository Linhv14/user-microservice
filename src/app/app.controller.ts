import { Controller, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CraeteProfileDTO } from '../../shared/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user.find-id')
  async findById(@Payload(ValidationPipe) ID: string) {
    console.log(ID)
    return await this.appService.findById(parseInt(ID))
  }

  @EventPattern('user.create-profile')
  async createProfile(@Payload(ValidationPipe) user: CraeteProfileDTO) {
    return await this.appService.createProfile(user)
  }
}
