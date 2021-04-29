import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  all(): string {
    return 'All Gamers!';
  }
  new(): string {
    return 'New Gamer!';
  }
  update(): string {
    return 'Update Gamer!';
  }
  delete(): string {
    return 'Delet Gamer!';
  }
}
