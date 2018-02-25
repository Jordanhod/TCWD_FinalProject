const express = require ('express');
const products = require ('./products-model');
const router = express.Router();

router.post('/collection', async (req, res)=>{
  productName = req.body.productName;
  res.json(await products.getProduct(productName));
});

router.get('/homepage', async (req, res)=>{
  res.json(await products.getHomepage());
});

router.get('/brides', async (req, res)=>{
  res.json(await products.getBridesPics());
});

router.get('/bridesmaids', async (req, res)=>{
  res.json(await products.getBridesmaidsPics());
});

router.get('/shoes', async (req, res)=>{
  res.json(await products.getShoesPics());
});



module.exports = router;
