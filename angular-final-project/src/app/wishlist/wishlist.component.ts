import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service';
import {ActivatedRoute}  from '@angular/router';
import {UserLoginService} from '../user-login.service';
import {WishlistService} from '../wishlist.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService, private login:UserLoginService, private wish:WishlistService) {
    this.wish.getWishlist().subscribe((wishlistSQL)=>{console.log(wishlistSQL); this.Products = wishlistSQL})
  }

  Products = this.wish.myWishlist;

  removeItem(productId){
    console.log(productId);
    this.wish.removeItem(productId)
    .subscribe((res)=>{console.log(res);
    this.wish.getWishlist()
    .subscribe((wishlistSQL)=>{console.log(wishlistSQL); this.Products = wishlistSQL})})
}
  ngOnInit() {
  }

}
