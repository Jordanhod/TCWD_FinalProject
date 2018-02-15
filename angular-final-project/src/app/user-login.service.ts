import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserLoginService {

  constructor(private http: Http) {
    // this.register('jordanhod@gmail.com', '11').subscribe(res=>console.log(res));
    // this.userLogin.subscribe(isLogin => {
    //   if(isLogin==true) console.log('true');
    //   else console.log('false')});
  }

private userLoginStatus:boolean = false;
public userLogin = new Subject<boolean>();
public userLink = new Subject<string>();
// public userDetails: Subject<Object> = new Subject<Object>();
public registrationURL = '/registered';


register(email, password) {
    console.log('service', email, password);
    return this.http.post('/api/myAccount/register', {email, password})
    .map(res=>res.json())
  }


  loginStatus(){
    this.validateUser().subscribe((res)=>{
      console.log('status', res.IsValid);
      this.userLogin.next(res.IsValid);})
    return this.validateUser()
  }

  validateUser(){
    return this.http.get('/api/myAccount/status')
             .map(res=>res.json());
  }

  signOut(){
    this.userLoginStatus = false;
    this.userLogin.next(this.userLoginStatus);
    return this.http.get('/api/myAccount/sign-out')
          .map(res=>res.json())
  }

}
