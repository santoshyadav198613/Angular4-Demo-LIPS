import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private loginService: LoginService, private roter: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.roter.navigate(['login']);
    return;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if (this.loginService.role === 'admin') {
      return true;
    }
   
    return false;
  }

 
}
