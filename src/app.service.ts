import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Workshop HME ITB' };
  }

  getVersion() {
    return { version: 'V1.00' };
  }
}
