import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
import {ProductDetailsService} from '../product-details.service';

@Component({
  selector: 'app-shoes-product-page',
  templateUrl: './shoes-product-page.component.html',
  styleUrls: ['./shoes-product-page.component.css'],
  providers:[ProductDetailsService]
})
export class ShoesProductPageComponent implements OnInit {
  productName:string = '';
  i=0;
  ParamProductName:string = '';
  index:number = 0;
  productDetails = {};
  shoes = [];

  constructor(private PDetails:ProductDetailsService, private router:ActivatedRoute) {
    this.PDetails.getShoes().subscribe((shoesPageArr) => {
      this.shoes = shoesPageArr;
      this.router.params.subscribe((param)=>{
          for (this.i = 0; this.i < this.shoes.length; this.i++) {
              this.productName = this.shoes[this.i].name;
              this.ParamProductName = param.productName;
                if (this.productName == this.ParamProductName) {this.index = this.i;
                this.PDetails.getShoesProduct(this.index).subscribe((productObj)=>
                {this.productDetails = productObj;
                  console.log(this.productDetails)});
      }}});
    });}

  ngOnInit() {
  }

}
