import { Directive } from '@angular/core';
import {UserLoginService} from './user-login.service';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core'
import { HostBinding } from '@angular/core'

@Directive({
  selector: '[appUserStatus]',
  providers: [UserLoginService]
})
export class UserStatusDirective {

private el;
  constructor (elRef:ElementRef, private login:UserLoginService) {this.el = elRef.nativeElement}

IsValid = false;


}
