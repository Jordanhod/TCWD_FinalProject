import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-bridesmaids-img',
  templateUrl: './bridesmaids-img.component.html',
  styleUrls: ['./bridesmaids-img.component.css'],
  providers:[ProductDetailsService]
})
export class BridesmaidsImgComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) {
    this.PDetails.getBridesmaidsDresses().subscribe((bridesPageArr) => {
      this.dresses = bridesPageArr;})
    }

  dresses = [];

  ngOnInit() {
  }

}
