import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.interface';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    return this.usersRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHash,
    });
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }
}
