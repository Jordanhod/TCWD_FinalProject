import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../user-login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  providers: [UserLoginService]
})
export class MyAccountComponent implements OnInit {

  constructor(private login:UserLoginService) {
  }

isValid = false;

  ngOnInit() {
    this.login.loginStatus()
    .subscribe((res)=>{
      this.isValid = res;
      console.log('my-account', this.isValid)
    })
  }

}
