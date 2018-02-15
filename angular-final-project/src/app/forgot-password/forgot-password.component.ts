import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../user-login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private login:UserLoginService) { }

  username:string = '';
  useremail:string = '';
  userpassword:string = '';
  input = {email: "" , password: ""};
  i:number = 0;
  index:number = -1;
  LoginSuccess = '/sign-in';
  UserIdentified = false;
  Error = '';

  ngOnInit() {
  }

}
