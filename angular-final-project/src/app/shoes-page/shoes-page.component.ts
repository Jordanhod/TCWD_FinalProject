import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-shoes-page',
  templateUrl: './shoes-page.component.html',
  styleUrls: ['./shoes-page.component.css']
})
export class ShoesPageComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) {
    this.PDetails.getShoes().subscribe((shoesPageArr) => {
      this.shoes = shoesPageArr;
      console.log(this.shoes);
    })
    }

  shoes = [];

  ngOnInit() {
  }

}
