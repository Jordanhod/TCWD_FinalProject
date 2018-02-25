import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDetailsService {

  constructor(private http: Http) {}

  productDetails = {};

  getHomepage(){
    return this.http.get('/api/products/homepage')
        .map(res=>res.json());
  }

  getBridesDresses(){
    return this.http.get('/api/products/brides')
        .map(res=>res.json());
  }

  getBridesmaidsDresses(){
    return this.http.get('/api/products/bridesmaids')
        .map(res=>res.json());
  }

  getShoes(){
    return this.http.get('/api/products/shoes')
        .map(res=>res.json());
  }

  getProduct(productName){
    return this.http.post('/api/products/collection', {productName})
        .map(res=>res.json());
  }

}
