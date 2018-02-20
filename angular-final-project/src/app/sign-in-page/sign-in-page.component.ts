import { Component, OnInit } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {UserLoginService} from '../user-login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor(private login:UserLoginService,  private router:Router) { }

errorMessage = '';
userDetails = {};
IsValid:boolean = false;

  loginRequest (email, password) {
    console.log(email, password);
    if (!email || !password) {this.errorMessage = "* data is missing"}
    else if (!email.includes('@')) {this.errorMessage = "* Email is not valid"}
    else {this.errorMessage = '';
          this.userDetails = {email, password};
          console.log('login request', email, password);
          this.login.signIn(email, password).subscribe((res)=>{
              this.IsValid = res;
              console.log(this.IsValid);
              this.IsValid ? this.router.navigate(['/registered']) : this.errorMessage = 'User was not identified. please try again';
            });
          }
  }

  ngOnInit() {
  }

}
