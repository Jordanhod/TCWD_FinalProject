import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
import {ProductDetailsService} from '../product-details.service'


@Component({
  selector: 'app-brides-product-page',
  templateUrl: './brides-product-page.component.html',
  styleUrls: ['./brides-product-page.component.css'],
  providers:[ProductDetailsService]
})
export class BridesProductPageComponent implements OnInit {
productName:string = '';
i=0;
ParamProductName:string = '';
index:number = 0;
productDetails = {};
dresses = [];

constructor(private PDetails:ProductDetailsService, private router:ActivatedRoute) {
  this.PDetails.getBridesDresses().subscribe((bridesPageArr) => {
    this.dresses = bridesPageArr;
    this.router.params.subscribe((param)=>{
        for (this.i = 0; this.i < this.dresses.length; this.i++) {
            this.productName = this.dresses[this.i].name;
            this.ParamProductName = param.productName;
              if (this.productName == this.ParamProductName) {this.index = this.i;
              this.PDetails.getBridesProduct(this.index).subscribe((productObj)=>
              {this.productDetails = productObj;
                console.log(this.productDetails)});
    }}});
});}

    ngOnInit() {}
}
