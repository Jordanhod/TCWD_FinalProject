import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class WishlistService {

  constructor(private http: Http) {}

  private refreshRate:number = 5000;
  public myWishlist = {product:[{
    name: 'Example product',
    tags: ['Top-Highneck','Back-Close','Skirt-WithSlit','Short-Sleeves','Modern','White', 'color touches'],
    designer: 'https://www.bhldn.com/resources/bhldn/images/layout/logo_bhldn_dark_grey.svg',
    cost: 650.00,
    currency: 'USD',
    Rating: 0,
    link: 'https://www.bhldn.com/product/michelle-dress/'
  }], pics: ['https://s7d1.scene7.com/is/image/BHLDN/43974559_011_a']
  }

getWishlist(){
  setTimeout(this.getWishlist.bind(this), this.refreshRate);
  return this.http.get('/api/myAccount/wishlist')
    .map(res=>res.json())
}

addItem(productId){
  return this.http.post('/api/myAccount/wishlist', {productId})
    .map(res=>res.json());
}

removeItem(productId){
  console.log('services' , productId);
  return this.http.delete('/api/myAccount/wishlist/' + productId)
  .map(res=>res.json());
}

}
