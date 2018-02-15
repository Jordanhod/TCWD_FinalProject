import { Component, OnInit,Input } from '@angular/core';
import {ProductDetailsService} from '../product-details.service';

@Component({
  selector: 'app-product-page-main',
  templateUrl: './product-page-main.component.html',
  styleUrls: ['./product-page-main.component.css'],
  providers: [ProductDetailsService]
})
export class ProductPageMainComponent implements OnInit {
  @Input() productDetails;

  constructor(private PDetails:ProductDetailsService) {}

changePic(src){
  if (src === this.productDetails.pics[1]){
    this.productDetails.pics[1] = this.productDetails.pics[0];
    this.productDetails.pics[0] = src;
  }
  else if (src === this.productDetails.pics[2]){
    this.productDetails.pics[2] =  this.productDetails.pics[0];
    this.productDetails.pics[0] = src;
  }
}

  ngOnInit() {}

}
