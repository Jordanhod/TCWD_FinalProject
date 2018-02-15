import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-brides-img',
  templateUrl: './brides-img.component.html',
  styleUrls: ['./brides-img.component.css'],
  providers:[ProductDetailsService]
})
export class BridesImgComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) {
    this.PDetails.getBridesDresses().subscribe((bridesPageArr) => {
      this.dresses = bridesPageArr;})
      console.log(this.dresses);
    }

  dresses = [];


  ngOnInit() {
  }

}
