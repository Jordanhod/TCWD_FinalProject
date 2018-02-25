const productsSQL = require ('./products');

let homepageSQL = [];
let pics = [];

module.exports = {
  getHomepage(){
    return productsSQL.Pics.findById(6)
    .catch(rej=>console.log(rej))
    .then(picRow => {homepageSQL[0] = picRow.pics})
    .then(()=>{return productsSQL.Pics.findById(15)})
    .catch(rej=>console.log(rej))
    .then(picRow => {homepageSQL[1] = picRow.pics})
    .then(()=>{return productsSQL.Pics.findById(21)})
    .catch(rej=>console.log(rej))
    .then(picRow => {homepageSQL[2] = picRow.pics})
    .then(()=> {return homepageSQL})
  },

  getBridesPics() {
    return productsSQL.Pics.findAll(({where:{pic_number: 0, type: 'Brides'}}))
    .then((brides)=> {return brides})
  },

  getBridesmaidsPics() {
    return productsSQL.Pics.findAll(({where:{pic_number: 0, type: 'Bridesmaids'}}))
    .then((bridesmaids)=> {return bridesmaids})
  },

  getShoesPics() {
    return productsSQL.Pics.findAll(({where:{pic_number: 0, type: 'Shoes'}}))
    .then((Shoes)=> {return Shoes})
  },

  getProduct(productName) {
    return productsSQL.Products.findOne(({where:{name: productName}}))
    .then((product)=> {productDetails = product})
    .then(()=>{return productsSQL.Pics.findAll(({where:{product_name: productName}}))})
    .catch(rej=>console.log(rej))
    .then((picsArr)=> {pics = [picsArr[0].pics, picsArr[1].pics, picsArr[2].pics];})
    .then(()=> {return {productDetails, pics}})
  },

}
