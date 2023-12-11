import { Injectable, Logger} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { OptionsDTO } from 'src/shared/user.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly userRepository: UserRepository,) { }

  async findById(ID: number) {
    this.logger.log("Find By ID:::::", ID)
    const user = await this.userRepository.findUniqueWithoutField({ ID }, 'password')
    return user
  }

  async getAllUsers(options: OptionsDTO) {
    this.logger.log("Getting all user:::::")
    const users = await this.userRepository.findAll(options)
    return users
  }

  async update(user: any) {
    const { ID, ...data } = user
    return await this.userRepository.update({ ID }, data)
  }

  async findNearBy() {
    console.log("service: finding")
  }

}
