import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service';
import {ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers: [ProductDetailsService]
})
export class WishlistComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) { }

  Product = this.PDetails.Brides[2]

  ngOnInit() {
  }

}
