import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
import {ProductDetailsService} from '../product-details.service';

@Component({
  selector: 'app-bridesmaids-product-page',
  templateUrl: './bridesmaids-product-page.component.html',
  styleUrls: ['./bridesmaids-product-page.component.css'],
  providers:[ProductDetailsService]
})
export class BridesmaidsProductPageComponent implements OnInit {
  productName:string = '';
  i=0;
  ParamProductName:string = '';
  index:number = 0;
  productDetails = {};
  dresses = [];

  constructor(private PDetails:ProductDetailsService, private router:ActivatedRoute) {
    this.PDetails.getBridesmaidsDresses().subscribe((bridesmaidsPageArr) => {
      this.dresses = bridesmaidsPageArr;
      this.router.params.subscribe((param)=>{
          for (this.i = 0; this.i < this.dresses.length; this.i++) {
              this.productName = this.dresses[this.i].name;
              this.ParamProductName = param.productName;
                if (this.productName == this.ParamProductName) {this.index = this.i;
                this.PDetails.getBridesmaidsProduct(this.index).subscribe((productObj)=>
                {this.productDetails = productObj;
                  console.log(this.productDetails)});
      }}});
    });}

  ngOnInit() {
  }

}
