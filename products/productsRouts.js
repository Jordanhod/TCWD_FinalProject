const express = require ('express');
const products = require ('./products-model');
const router = express.Router();

router.get('/homepage', async (req, res)=>{
  console.log('routes ok')
  res.json(await products.getHomepageSQL());
});

router.get('/brides', async (req, res)=>{
  res.json(await products.getBridesPicsSQL());
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
