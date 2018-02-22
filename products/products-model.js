const brides = require ('./brides');
const bridesmaids = require ('./bridesmaids');
const shoes = require ('./shoes');
const productsSQL = require ('./products');

let BridesPageArr = [];
let BridesmaidsPageArr = [];
let ShoesPageArr =[];
let productDetailsObj = {};
let productDetails = {};
let homepageSQL = [];
let pics = [];

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
    return productsSQL.Pics.findAll(({where:{pic_number: 0, type: 'Brides'}}))
    .then((brides)=> {return brides})
  },

  getBridesmaidsPicsSQL() {
    return productsSQL.Pics.findAll(({where:{pic_number: 0, type: 'Bridesmaids'}}))
    .then((bridesmaids)=> {return bridesmaids})
  },

  getShoesPicsSQL() {
    return productsSQL.Pics.findAll(({where:{pic_number: 0, type: 'Shoes'}}))
    .then((Shoes)=> {return Shoes})
  },

  getProductSQL(productName) {
    return productsSQL.Brides.findOne(({where:{name: productName}}))
    .then((product)=> {productDetails = product})
    .then(()=>{return productsSQL.Pics.findAll(({where:{product_name: productName}}))})
    .catch(rej=>console.log(rej))
    .then((picsArr)=> {pics = [picsArr[0].pics, picsArr[1].pics, picsArr[2].pics];})
    .then(()=> {return {productDetails, pics}})
  },


  getShoesPicsSQL() {
    return productsSQL.Pics.findAll(({where:{pic_number: 0, type: 'Shoes'}}))
    .then((shoes)=> {return shoes})
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
