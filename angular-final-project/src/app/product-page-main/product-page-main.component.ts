import { Component, OnInit, Input } from '@angular/core';
import {ProductDetailsService} from '../product-details.service';
import {ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-product-page-main',
  templateUrl: './product-page-main.component.html',
  styleUrls: ['./product-page-main.component.css'],
})
export class ProductPageMainComponent implements OnInit {

  productName:string = '';
  ParamProductName:string = '';
  productDetails = {};
  pics = [];
  dresses = [];

  constructor(private PDetails:ProductDetailsService, private router:ActivatedRoute) {
      this.router.params.subscribe((param)=>{
            this.productName = param.productName;
            this.PDetails.getProductSQL(this.productName)
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


//
// changePic(src){
//   if (src === this.productDetails.pics[1]){
//     this.productDetails.pics[1] = this.productDetails.pics[0];
//     this.productDetails.pics[0] = src;
//   }
//   else if (src === this.productDetails.pics[2]){
//     this.productDetails.pics[2] =  this.productDetails.pics[0];
//     this.productDetails.pics[0] = src;
//   }
// }

  ngOnInit() {}

}
