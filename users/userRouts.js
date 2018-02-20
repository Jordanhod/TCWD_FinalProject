const express = require ('express');
const users = require ('./users-model');
const router = express.Router();
const session = require('express-session')
const Sequelize = require('sequelize');

router.get('/status', (req,res)=>{
  let IsValid = req.session.IsValid;
  res.json({IsValid});
})

router.post('/login', async (req,res)=>{
    let userEmail = req.body.email;
    let userPassword = req.body.password;
    if (!userEmail || !userPassword){
      req.session.IsValid = false;
      res.sendStatus(400)}
    else {
      req.session.email = userEmail; req.session.IsValid = true;
      console.log(req.session, req.session.id, userEmail, userPassword);}
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
          console.log(req.session, req.session.id, req.session.IsValid);}
          res.json(await users.registerSQL(userEmail, userPassword));
})

router.get('/sign-out', (req, res)=>{
    req.session.IsValid = false;
    console.log(req.session.IsValid);
    res.json({IsValid: false});
});

router.post('/sign-in', (req, res)=>{
    let email = req.body.email;
    let userPassword = req.body.password;
    if (!email || !userPassword){req.session.IsValid = false; res.sendStatus(400)}
    else {res.json(users.loginRequest(email,userPassword))};
});

module.exports = router;
