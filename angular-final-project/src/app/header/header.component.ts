import { Component, OnInit } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {UserLoginService} from '../user-login.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserLoginService]

})
export class HeaderComponent implements OnInit {

  constructor(private login:UserLoginService) {}

  isLogin = false;

  ngOnInit() {
    this.login.userLogin
    .subscribe((res) =>{
      console.log('header got it', res);
      this.isLogin = res})
  }

}
