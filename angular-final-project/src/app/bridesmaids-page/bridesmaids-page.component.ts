import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-bridesmaids-page',
  templateUrl: './bridesmaids-page.component.html',
  styleUrls: ['./bridesmaids-page.component.css']
})
export class BridesmaidsPageComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) {
    this.PDetails.getBridesmaidsDresses().subscribe((bridesPageArr) => {
      this.dresses = bridesPageArr;})
    }

dresses = [];

  ngOnInit() {
  }

}
