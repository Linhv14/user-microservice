import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from './user.repository';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly userRepository: UsersRepository) { }

  async findById(ID: number) {
    this.logger.log("Find By ID:::::", ID)
    const user = await this.userRepository.findUniqueWithoutField({ID}, 'password')
    return user
  }

  async update(user: any) {
    const {ID, ...data} = user
    return await this.userRepository.updateMany({ID}, data)
  }
}
