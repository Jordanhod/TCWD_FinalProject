const brides = require ('./brides');
const bridesmaids = require ('./bridesmaids');
const shoes = require ('./shoes');

let BridesPageArr = [];
let BridesmaidsPageArr = [];
let ShoesPageArr =[];
let productDetailsObj = {};
let homepagePics = [brides.Brides[1].pics[2], brides.Brides[4].pics[2], brides.Brides[6].pics[2]]

module.exports = {
  getHomepage(){
      return homepagePics;
  },

  getBridesDresses() {
      for (i=0; i< brides.Brides.length; i++) {
        BridesPageArr[i] =
        {pics: brides.Brides[i].pics, name: brides.Brides[i].name};}
    return BridesPageArr;
  },

  getBridesmaidsDresses() {
    for (i=0; i< bridesmaids.Bridesmaids.length; i++) {
      BridesmaidsPageArr[i] =
      {pics: bridesmaids.Bridesmaids[i].pics, name: bridesmaids.Bridesmaids[i].name};}
  return BridesmaidsPageArr;
  },

  getShoes() {
    for (i=0; i< shoes.Shoes.length; i++) {
      ShoesPageArr[i] =
      {pics: shoes.Shoes[i].pics, name: shoes.Shoes[i].name};}
    return ShoesPageArr;
  },

  getBridesProduct(productID) {
    productDetailsObj = brides.Brides[productID];
    return productDetailsObj;
  },

  getBridesmaidsProduct(productID) {
    productDetailsObj = bridesmaids.Bridesmaids[productID];
    return productDetailsObj;
  },

  getShoesProduct(productID) {
    productDetailsObj = shoes.Shoes[productID];
    return productDetailsObj;
  },

}
