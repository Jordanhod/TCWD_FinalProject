import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-shoes-img',
  templateUrl: './shoes-img.component.html',
  styleUrls: ['./shoes-img.component.css'],
  providers:[ProductDetailsService]
})
export class ShoesImgComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) {
    this.PDetails.getShoes().subscribe((shoesPageArr) => {
      this.shoes = shoesPageArr;})
      console.log(this.shoes);
    }

  shoes = [];

  ngOnInit() {
  }

}
