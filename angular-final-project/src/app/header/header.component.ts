import { Component, OnInit, Input } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {UserLoginService} from '../user-login.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private login:UserLoginService) {}

isLogin:boolean = this.login.userLoginStatus;

signOut(){
this.login.signOut().subscribe((res) =>{
  console.log('sign-out', res);})
}

ngOnInit() {
    this.login.userLogin.subscribe((res) =>{
      console.log('header got it', res);})
  }

}
