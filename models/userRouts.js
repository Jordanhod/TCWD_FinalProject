const express = require ('express');
const session = require('express-session')
const Sequelize = require('sequelize');
const users = require ('./users-model');
const wishlist = require ('./wishlist-model');
const router = express.Router();

router.get('/status', (req,res)=>{
  let IsValid = req.session.IsValid;
  res.json({IsValid});
})

router.get('/wishlist', async (req,res)=>{
  let userEmail = req.session.email;
  let IsValid = req.session.IsValid;
  if (!IsValid || !userEmail) {res.sendStatus(400)}
  else {
  res.json(await wishlist.getWishlist(userEmail));}
})

router.post('/wishlist', async (req, res)=>{
    let userEmail = req.session.email;
    let productId = req.body.productId;
    if (!userEmail || !productId) {res.sendStatus(400)}
    else {res.json(await wishlist.addItem(userEmail, productId))};
})

router.delete('/wishlist/:productId', async (req, res)=>{
    let userEmail = req.session.email;
    let productId = req.params.productId;
    if (!userEmail || !productId) {res.sendStatus(400)}
    else {res.json(await wishlist.deleteItem(userEmail, productId))};
})

router.post('/login', async (req,res)=>{
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    if (!userEmail || !userPassword){
      req.session.IsValid = false;
      res.sendStatus(400)}
    else {
      req.session.email = userEmail; req.session.IsValid = true;
      console.log(req.session.id);}
      res.json(await users.loginRequest(userEmail, userPassword));
})

router.post('/register', async (req, res)=>{
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    if (!userEmail || !userPassword){
      req.session.IsValid = false;
      res.sendStatus(400)}
    else {
          req.session.email = userEmail; req.session.IsValid = true;
          console.log(req.session, req.session.id);}
          res.json(await users.register(userEmail, userPassword));
})

router.get('/sign-out', (req, res)=>{
    req.session.IsValid = false;
    res.json({IsValid: false});
});

module.exports = router;
