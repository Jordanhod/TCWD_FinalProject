const express = require ('express');
const products = require ('./products-model');
const router = express.Router();

router.post('/collection', async (req, res)=>{
  productName = req.body.productName;
  res.json(await products.getProductSQL(productName));
});

router.get('/homepage', async (req, res)=>{
  console.log('routes ok')
  res.json(await products.getHomepageSQL());
});

router.get('/brides', async (req, res)=>{
  res.json(await products.getBridesPicsSQL());
});

router.get('/bridesmaids', async (req, res)=>{
  res.json(await products.getBridesmaidsPicsSQL());
});

router.get('/shoes', async (req, res)=>{
  res.json(await products.getShoesPicsSQL());
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
