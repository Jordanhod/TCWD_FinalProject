import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-brides-page',
  templateUrl: './brides-page.component.html',
  styleUrls: ['./brides-page.component.css']
})
export class BridesPageComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) {
    this.PDetails.getBridesDresses().subscribe((dressesSQL) => {
      this.dresses = dressesSQL;
      console.log(this.dresses);})
    }

  dresses = [];

  ngOnInit() {
  }

}
