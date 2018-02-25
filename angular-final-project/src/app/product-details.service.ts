import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDetailsService {

  constructor(private http: Http) {}

index = 0;
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

getProductSQL(productName){
  return this.http.post('/api/products/collection', {productName})
      .map(res=>res.json());
}

getBridesProduct(productID){
  this.index = productID;
  return this.http.post('/api/products/brides', {productID})
      .map(res=>res.json());
}

getBridesmaidsProduct(productID){
  this.index = productID;
  return this.http.post('/api/products/bridesmaids', {productID})
      .map(res=>res.json());
}

getShoesProduct(productID){
  this.index = productID;
  return this.http.post('/api/products/shoes', {productID})
      .map(res=>res.json());
}
}
