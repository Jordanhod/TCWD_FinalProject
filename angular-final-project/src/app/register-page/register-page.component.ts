import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../user-login.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private login:UserLoginService, private router:Router) { }

userDetails = {};
errorMessage = '';
IsValid = false;


  comparePass (email, password, passwordRepeat) {
    if (password !== passwordRepeat) {this.errorMessage = "* Passwords don't match"}
    else if (!email.includes('@')) {this.errorMessage = "* Email is not valid"}
    else {this.errorMessage = '';
          this.userDetails = {email, password};
          this.login.register(email, password).subscribe((res)=>{
              this.router.navigate([res.status]);
              this.IsValid = res.IsValid;
            });
          }
  }

  onSubmit(form) {}

  ngOnInit() {}

}
