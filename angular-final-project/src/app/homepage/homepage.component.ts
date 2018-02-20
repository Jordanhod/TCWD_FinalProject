import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private PDetails:ProductDetailsService) {
    this.PDetails.getHomepage().subscribe((arr) => {
      this.modelPics = arr;})
 }

modelPics = [];



  ngOnInit() {
  }

}
