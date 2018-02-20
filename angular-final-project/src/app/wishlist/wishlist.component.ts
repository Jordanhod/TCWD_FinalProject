import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service';
import {ActivatedRoute}  from '@angular/router';
import {UserLoginService} from '../user-login.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService, private login:UserLoginService) { }

  Products = this.PDetails.Brides

  ngOnInit() {
  }

}
