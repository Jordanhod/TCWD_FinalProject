const Sequelize = require('sequelize');
const users = require('./users');
const productsSQL = require ('./products');

let myWishlist = [];
let ProductsID = [];
let productsDetails = [];

function getUserId(userEmail){
    return new Promise((resolve,reject)=>{
      return users.Users.findOne({where: {email: userEmail}})
      .catch((err)=>{reject(err)})
      .then((userFound) => {console.log(userFound.id); resolve(userFound.id)})
    })
}

function getProducts(ProductsID){
    return new Promise((resolve,reject)=>{
      return productsSQL.Pics.findAll({where: {product_id: ProductsID, pic_number: 0}, include: ['product']})
      .catch((err)=>{reject(err)})
      .then((productsFound)=> {productsDetails = productsFound;
           resolve(productsDetails)})
    })
}

module.exports = {

  getWishlist(userEmail){
    return getUserId(userEmail)
    .then((userId) => {console.log(userId);return users.Wishlist.findAll({where: {user_id: userId}})})
    .catch((err)=>{return err})
    .then((wishlistFound) => {myWishlist = wishlistFound;
            for (var i = 0; i < myWishlist.length; i++) {
                ProductsID[i] = myWishlist[i].product_id};
            return getProducts(ProductsID);})
    .then(()=>{return productsDetails})
  },

  addItem(userEmail, productId){
    return getUserId(userEmail)
    .then((userId) => {console.log(userId, productId); return users.Wishlist.create({user_id :userId, product_id: productId})})
    .catch((err)=>{console.log(err)})
    .then(()=>{return {status: '/myAccount/wishlist'}});
  },

  deleteItem(userEmail, productId){
    return getUserId(userEmail)
    .then((userId) => {console.log(userId, productId); return users.Wishlist.findOne({where: {user_id :userId, product_id: productId}})})
    .catch((err)=>console.log(err))
    .then((productFound)=>{return productFound.destroy()})
    .catch((err)=>console.log(err))
    .then(()=>{return {status: '/myAccount/wishlist'}});
  },

}
