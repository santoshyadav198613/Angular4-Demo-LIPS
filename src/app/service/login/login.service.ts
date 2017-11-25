import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  role: string;

  constructor() { }

  login(user: User): boolean {
    if (user.password === 'test' && user.userName === 'test') {
      this.isLoggedIn = true;
      this.role = 'user';
    }
    else if (user.password === 'admin' && user.userName === 'admin') {
      this.isLoggedIn = true;
      this.role = 'admin'
    }
    return this.isLoggedIn;
  }

}
