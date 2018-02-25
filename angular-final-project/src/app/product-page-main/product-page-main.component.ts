import { Component, OnInit, Input } from '@angular/core';
import {ProductDetailsService} from '../product-details.service';
import {WishlistService} from '../wishlist.service';
import {ActivatedRoute,  Router}  from '@angular/router';

@Component({
  selector: 'app-product-page-main',
  templateUrl: './product-page-main.component.html',
  styleUrls: ['./product-page-main.component.css'],
})
export class ProductPageMainComponent implements OnInit {

  productName:string = '';
  ParamProductName:string = '';
  productDetails = {id:1};
  pics = [];
  dresses = [];

  constructor(private PDetails:ProductDetailsService, private wish:WishlistService,
              private activeRoute:ActivatedRoute, private router:Router) {
      this.activeRoute.params.subscribe((param)=>{
            this.productName = param.productName;
            this.PDetails.getProduct(this.productName)
            .subscribe((productObj)=>
                  {this.productDetails = productObj.productDetails;
                    this.pics = productObj.pics;
                    console.log('product', this.productDetails, this.pics)});
      })
  }

  changePic(src){
    if (src === this.pics[1]){
      this.pics[1] = this.pics[0];
      this.pics[0] = src;
    }
    else if (src === this.pics[2]){
      this.pics[2] =  this.pics[0];
      this.pics[0] = src;
    }
  }

  addToWishlist(){
    console.log(this.productDetails.id)
    this.wish.addItem(this.productDetails.id).subscribe((res)=>{
      // console.log(res);
      this.router.navigate([res.status]);
    })
  }

  ngOnInit() {}

}
