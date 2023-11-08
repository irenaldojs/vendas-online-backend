import { Injectable } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    userId: number,
    createAddressDto: CreateAddressDto,
  ): Promise<AddressEntity> {
    return this.addressRepository.save({ ...createAddressDto, userId });
  }
}
