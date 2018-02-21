const brides = require ('./brides');
const bridesmaids = require ('./bridesmaids');
const shoes = require ('./shoes');
const productsSQL = require ('./products');

let BridesPageArr = [];
let BridesmaidsPageArr = [];
let ShoesPageArr =[];
let productDetailsObj = {};
// let homepagePics = [brides.Brides[1].pics[2], brides.Brides[4].pics[2], brides.Brides[6].pics[2]];
let homepageSQL = [];

module.exports = {
  getHomepageSQL(){
    return productsSQL.Pics.findById(6)
    .catch(rej=>console.log(rej))
    .then(picRow => {homepageSQL[0] = picRow.pics})
    .then(()=>{return productsSQL.Pics.findById(15)})
    .catch(rej=>console.log(rej))
    .then(picRow => {homepageSQL[1] = picRow.pics})
    .then(()=>{return productsSQL.Pics.findById(21)})
    .catch(rej=>console.log(rej))
    .then(picRow => {homepageSQL[2] = picRow.pics})
    .then(()=> {console.log(homepageSQL); return homepageSQL})
  },

  getBridesPicsSQL() {
    return productsSQL.Pics.findAll(({where:{pic_number: 0}}))
    .then((brides)=> {return brides})
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
