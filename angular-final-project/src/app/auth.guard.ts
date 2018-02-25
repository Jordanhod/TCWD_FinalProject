import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserLoginService} from './user-login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private login:UserLoginService) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.login.userLoginStatus;
  }
}
