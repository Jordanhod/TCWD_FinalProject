import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../user-login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit {

  constructor(private login:UserLoginService) {
  }

  ngOnInit() {
  }

}
