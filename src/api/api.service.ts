import { Injectable } from '@nestjs/common';
import { usersInfo } from './data';

@Injectable()
export class ApiService {

  findAll() {
    const { results } = usersInfo;
    return results.map( ({ id, name, picture, email, cell, phone, login }) => ({ id, name, picture, email, cell, phone, login }));
  }

}
