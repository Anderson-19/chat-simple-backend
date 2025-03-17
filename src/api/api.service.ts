import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { usersInfo } from './data';

@Injectable()
export class ApiService {
  create(createApiDto: CreateApiDto) {
    return 'This action adds a new api';
  }

  findAll() {
    const { results } = usersInfo;
    return results.map( ({ id, name, picture, email, cell, phone, login }) => ({ id, name, picture, email, cell, phone, login }));
  }

  findOne(id: number) {
    return `This action returns a #${id} api`;
  }

  update(id: number, updateApiDto: UpdateApiDto) {
    return `This action updates a #${id} api`;
  }

  remove(id: number) {
    return `This action removes a #${id} api`;
  }
}
