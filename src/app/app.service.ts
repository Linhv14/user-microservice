import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly userRepository: UserRepository) { }

  async findById(ID: number) {
    this.logger.log("Find By ID:::::", ID)
    const user = await this.userRepository.findUniqueWithoutField({ ID }, 'password')
    return user
  }

  async update(user: any) {
    const { ID, ...data } = user
    return await this.userRepository.updateMany({ ID }, data)
  }
}
