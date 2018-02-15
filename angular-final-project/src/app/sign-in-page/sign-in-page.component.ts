import { Component, OnInit } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {UserLoginService} from '../user-login.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  providers: [UserLoginService]
})
export class SignInPageComponent implements OnInit {

  constructor(private login:UserLoginService) { }

username:string = '';
useremail:string = '';
userpassword:string = '';
input = {email:"" , password:""};
i:number = 0;
index:number = -1;
LoginSuccess = '/sign-in';
UserIdentified = false;
Error = '';

  LoginRequest() {
    // this.useremail = this.input.email;
    // this.userpassword = this.input.password;
    // for (this.i = 0; this.i < this.login.Users.length; this.i++) {
    //     if (this.useremail == this.login.Users[this.i].email){
    //       this.index = this.i;
    //       this.username = this.login.Users[this.i].username;
    //       console.log('username', this.username);
    //       this.UserIdentified = true;
        }
    // }

 // }

  onSubmit(myForm) {
  console.log(myForm)
  // if (this.UserIdentified = false) {this.Error = 'username or password incorrect'}
  // else this.LoginSuccess = '';
  }

  ngOnInit() {
  }

}
