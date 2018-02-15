const express = require ('express');
const products = require ('./products-model');
const router = express.Router();

router.get('/homepage', (req, res)=>{
  res.json(products.getHomepage());
});

router.get('/brides', (req, res)=>{
  res.json(products.getBridesDresses());
});

router.get('/bridesmaids', (req, res)=>{
  res.json(products.getBridesmaidsDresses());
});

router.get('/shoes', (req, res)=>{
  res.json(products.getShoes());
});

router.post('/brides', (req, res)=>{
  productID = req.body.productID;
  res.json(products.getBridesProduct(productID));
});

router.post('/bridesmaids', (req, res)=>{
  productID = req.body.productID;
  res.json(products.getBridesmaidsProduct(productID));
});

router.post('/shoes', (req, res)=>{
  productID = req.body.productID;
  res.json(products.getShoesProduct(productID));
});



module.exports = router;
