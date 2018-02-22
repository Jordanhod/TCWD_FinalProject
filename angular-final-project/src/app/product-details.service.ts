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

B1100 = {
  sku: 'B1100',
  name: 'Opaline Ballgown',
  pics: ["https://s7d1.scene7.com/is/image/BHLDN/42981423_011_a",'https://s7d1.scene7.com/is/image/BHLDN/42981423_011_b',
          'https://s7d1.scene7.com/is/image/BHLDN/42981423_011_c'],
  tags: ['Top-Straps','Back-Bare','Skirt-ALine','Short-Sleeves','Modern','Romantic','Ivory','Trail'],
  designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
  cost: 1450.00,
  currency: 'USD',
  Rating: 4.5,
  link: 'https://www.bhldn.com/product/opaline-ballgown'
}
// B1101 = {
//   sku: 'B1101',
//   name: 'Heritage Gown',
//   pics: ["https://s7d1.scene7.com/is/image/BHLDN/42904383_011_a", 'https://s7d1.scene7.com/is/image/BHLDN/42904383_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/42904383_011_c'],
//   tags: ['Top-illusion','Back-Bare','Skirt-ALine','Short-Sleeves','Romantic','Classic','Champagne'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 975.00,
//   currency: 'USD',
//   Rating: 4.9,
//   link: 'https://www.bhldn.com/product/heritage-gown'
// }
// B1102 = {
//   name: 'Jayne Dress',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/42604991_011_a','https://s7d1.scene7.com/is/image/BHLDN/42604991_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/42604991_011_c'],
//   tags: ['Top-Highneck','Back-Open','Skirt-ALine','Skirt-Empire','Short-Sleeves','Romantic','White', 'Belt'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 60.00,
//   currency: 'USD',
//   Rating: 2.9,
//   link: 'https://www.bhldn.com/product/jayne-dress'
// }
// B1103 = {
//   name: 'Dakota Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/30318646_011_a'],
//   tags: ['Top-Strapless','Back-Bare','Skirt-Mermaid','Short-Sleeves','Classic','White', 'Trail'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 400.00,
//   currency: 'USD',
//   Rating: 4.3,
//   link: 'https://www.bhldn.com/product/dakota-gown'
// }
// B1104 = {
//   name: 'Lucca Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/44639615_011_a','https://s7d1.scene7.com/is/image/BHLDN/44639615_011_b','https://s7d1.scene7.com/is/image/BHLDN/44639615_011_c'],
//   tags: ['Top-Uneck','Back-Open','Skirt-Empire','Long-Sleeves','Romantic','Boho', 'Ivory'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 900,
//   currency: 'USD',
//   Rating: 4.9,
//   link: 'https://www.bhldn.com/bride-wedding-dresses-spirited-bohemian-collection/lucca-gown-ivory/productOptionIDS/fbcaeb8b-b90b-4e9a-9313-32da085940dd'
// }
// B1105 = {
//   name: 'Placid Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/43377407_011_a', 'https://s7d1.scene7.com/is/image/BHLDN/43377407_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/43377407_011_c'],
//   tags: ['Top-Uneck','Back-Close','Skirt-WithSlit','Short-Sleeves','Boho','Ivory', 'Belt'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 650,
//   currency: 'USD',
//   Rating: 0,
//   link: ''
// }
// B1106 = {
//   name: 'Rowena Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/43602531_011_a', 'https://s7d1.scene7.com/is/image/BHLDN/43602531_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/43602531_011_c'],
//   tags: ['Top-Strapless','Back-Bare','Skirt-BallGown','Short-Sleeves','Romantic','Ivory', 'Belt'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 1215.00,
//   currency: 'USD',
//   Rating: 4.2,
//   link: 'https://www.bhldn.com/bride-wedding-dresses-winter-wedding-looks/rowena-gown/'
// }
// B1107 = {
//   name: 'Sascha Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/41950916_011_a', 'https://s7d1.scene7.com/is/image/BHLDN/41950916_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/41950916_011_c'],
//   tags: ['Top-OffShoulder','Back-Bare','Skirt-Mermaid','Short-Sleeves', 'Long-Sleeves','Modern','White', 'Trail'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 400.00,
//   currency: 'USD',
//   Rating: 0,
//   link: 'https://www.bhldn.com/product/sascha-gown'
// }
// B1108 = {
//   name: 'Bridgette Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/36104636_011_d','https://s7d1.scene7.com/is/image/BHLDN/36104636_011_b','https://s7d1.scene7.com/is/image/BHLDN/36104636_011_c'],
//   tags: ['Top-Highneck','Back-Close','Skirt-Mermaid','Short-Sleeves','Long-Sleeves','Vintage','Modest','Champagne','Belt'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 800.00,
//   currency: 'USD',
//   Rating: 4.3,
//   link: 'https://www.bhldn.com/shop-the-bride-wedding-dresses/bridgette-gown/'
// }
// B1109 = {
//   name: 'Adelaide Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/33175589_011_a','https://s7d1.scene7.com/is/image/BHLDN/33175589_011_b','https://s7d1.scene7.com/is/image/BHLDN/33175589_011_c'],
//   tags: ['Top-Strapless','Back-Bare','Skirt-Mermaid','Short-Sleeves','Romantic','Ivory', 'Trail'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 2000.00,
//   currency: 'USD',
//   Rating: 4.8,
//   link: 'https://www.bhldn.com/bride/adelaide-gown'
// }
// B1110 = {
//   name: 'Naya Dress',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/38613352_013_a','https://s7d1.scene7.com/is/image/BHLDN/38613352_013_b','https://s7d1.scene7.com/is/image/BHLDN/38613352_013_c'],
//   tags: ['Top-Straps','Back-Bare','Skirt-ALine','Skirt-Empire','Short-Sleeves','Romantic','White', 'Nude', 'Studs'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 250.00,
//   currency: 'USD',
//   Rating: 4.5,
//   link: 'https://www.bhldn.com/product/naya-dress'
// }
// B1111 = {
//   name: 'Avalon Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/33060351_011_a','https://s7d1.scene7.com/is/image/BHLDN/33060351_011_b','https://s7d1.scene7.com/is/image/BHLDN/33060351_011_c'],
//   tags: ['Top-illusion','Back-Close','Skirt-Empire','Short-Sleeves','Vintage','Ivory', 'Studs'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 360.00,
//   currency: 'USD',
//   Rating: 4.0,
//   link: 'https://www.bhldn.com/shop-the-bride-wedding-dresses-back-detail/avalon-gown'
// }
// B1112 = {
//   name: 'Delancey Gown',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/40563561_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/40563561_011_a', 'https://s7d1.scene7.com/is/image/BHLDN/40563561_011_c'],
//   tags: ['Top-Halter','Back-Open','Skirt-ALine','Skirt-Empire','Short-Sleeves','Modern','Rustic','Ivory'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 700.00,
//   currency: 'USD',
//   Rating: 4.7,
//   link: 'https://www.bhldn.com/product/delancey-gown'
// }
// B1113 = {
//   name: 'Michelle Dress',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/43974559_011_a', 'https://s7d1.scene7.com/is/image/BHLDN/43974559_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/43974559_011_c'],
//   tags: ['Top-Highneck','Back-Close','Skirt-WithSlit','Short-Sleeves','Modern','White', 'color touches'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 650.00,
//   currency: 'USD',
//   Rating: 0,
//   link: 'https://www.bhldn.com/product/michelle-dress/'
// }
// B1114 = {
//   name: 'Sydney Top & Marcie Skirt',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/20170818_sydneymarcieivory_a', 'https://s7d1.scene7.com/is/image/BHLDN/41068834_011_b', 'https://s7d1.scene7.com/is/image/BHLDN/20170818_sydneymarcieivory_b'],
//   tags: ['Top-Highneck','Back-Close','Skirt-TeaLength','Short-Sleeves','Vintage','Ivory', 'Two pieces'],
//   designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
//   cost: 180.00,
//   currency: 'USD',
//   Rating: 0,
//   link: 'https://www.bhldn.com/bride-bridal-separates/sydney-top-marcie-skirt'
// }
//
//
// B1115 = {
//   name: '',
//   pics: ['https://s7d1.scene7.com/is/image/BHLDN/42977355_011_c'],
//   top: 'Top-Straps',
//   back: 'Back-Bare',
//   skirt:'Skirt-ALine',
//   sleaves:'Long',
//   style:'Romantic',
//   color:'Ivory',
//   Feature1:'Trail',
//   cost: 0,
//   currency: 'USD',
//   Rating: 0,
//   link: ''
// }

// "https://s7d1.scene7.com/is/image/BHLDN/33349739_011_a";
//
// "https://s7d1.scene7.com/is/image/BHLDN/44647675_011_b"
// https://www.bhldn.com/product/tabitha-gown
// https://www.bhldn.com/occasion-dresses-view-all-dresses/trailing-floral-maxi/
// https://www.bhldn.com/product/kennedy-gown
// https://www.bhldn.com/product/marivana-lace-gown
// https://www.bhldn.com/bride-wedding-dresses-sleeves/la-turibe-dress/
// https://www.bhldn.com/bride-wedding-dresses-sleeves/pearson-dress/
// https://www.bhldn.com/bride-wedding-dresses-sleeves/kenna-gown/
// https://www.bhldn.com/bride-wedding-dresses-sleeves/miranda-gown/
// https://www.bhldn.com/bride-wedding-dresses-sleeves/cara-gown/
// https://www.bhldn.com/bride-wedding-dresses-sleeves/katherine-gown/
// https://www.bhldn.com/product/blake-gown
Brides = [this.B1100,];
// this.B1101, this.B1102, this.B1103, this.B1104, this.B1105, this.B1106, this.B1107, this.B1108, this.B1109, this.B1110,
          // this.B1111, this.B1112, this.B1113, this.B1114];

}
