import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() { }

  login(user: User): boolean {
    if (user.password === 'test' && user.userName === 'test') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
