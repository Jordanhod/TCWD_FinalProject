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
  tags = [];
  dresses = [];

  constructor(private PDetails:ProductDetailsService, private wish:WishlistService,
              private activeRoute:ActivatedRoute, private router:Router) {
      this.activeRoute.params.subscribe((param)=>{
            this.productName = param.productName;
            this.PDetails.getProduct(this.productName)
            .subscribe((productObj)=>
                  {this.productDetails = productObj.productDetails;
                    this.pics = productObj.pics;
                    this.tags = productObj.tags;
                    console.log('product', this.productDetails, this.pics, this.tags)});
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

  addWishlist(){
    console.log(this.productDetails.id)
    this.wish.addItem(this.productDetails.id).subscribe((res)=>{
      console.log(res.status);
      this.router.navigate([res.status]);
    })
  }

  ngOnInit() {}

}
