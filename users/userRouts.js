const express = require ('express');
const users = require ('./users-model');
const router = express.Router();
const session = require('express-session')
const Sequelize = require('sequelize');

router.get('/status', (req,res)=>{
  // console.log(req.session, req.session.id, req.session.IsValid);
  let IsValid = req.session.IsValid;
  res.json({IsValid});
})

router.post('/try', (req,res)=>{
    let email = req.body.email;
    let userPassword = req.body.password;
    if (!email || !userPassword){
      req.session.IsValid = false;
      res.sendStatus(400)}
    else {
      console.log(req.session, req.session.id, email, password);}
      res.json(users.loginRequest(email, userPassword));
})

router.post('/register', async (req, res)=>{
    let email = req.body.email;
    let userPassword = req.body.password;
    if (!email || !userPassword){
      req.session.IsValid = false;
      res.sendStatus(400)}
    else {
          req.session.email = email; req.session.IsValid = true;
          console.log(req.session, req.session.id, req.session.IsValid);}
          res.json(await users.registerSQL(email, userPassword));
})

router.get('/sign-out', (req, res)=>{
    req.session.IsValid = false;
    console.log(req.session.IsValid);
    res.json({IsValid: req.session.IsValid});
});

router.post('/sign-in', (req, res)=>{
    let email = req.body.email;
    let userPassword = req.body.password;
    if (!email || !userPassword){req.session.IsValid = false; res.sendStatus(400)}
    else {res.json(users.loginRequest(email,userPassword))};
});

module.exports = router;
