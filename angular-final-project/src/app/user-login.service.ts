import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserLoginService {

  constructor(private http: Http) {
    // this.signIn('jordanhod@gmail.com', '11').subscribe(res=>console.log(res));
  }

  // public userDetails: Subject<Object> = new Subject<Object>();
public userLoginStatus:boolean = false;
public userLogin: Subject<boolean> = new Subject<boolean>();


register(email, password) {
    this.userLoginStatus = true;
    this.userLogin.next(true);
    return this.http.post('/api/myAccount/register', {email, password})
    .map(res=>res.json())
  }

signIn(email, password) {
  this.userLoginStatus = true;
  this.userLogin.next(true);
  return this.http.post('/api/myAccount/login', {email, password})
  .map(res=>res.json())
}

  loginStatus(){
    return this.http.get('/api/myAccount/status')
             .map(res=>res.json());
  }


  signOut(){
    this.userLoginStatus = false;
    this.userLogin.next(false);
    return this.http.get('/api/myAccount/sign-out')
          .map(res=>res.json())
  }

}
