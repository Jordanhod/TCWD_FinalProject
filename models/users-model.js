const bcrypt = require ('bcrypt');
const saltRounds = 10;
const Sequelize = require('sequelize');
const users = require('./users');

module.exports = {

  loginRequest(userEmail, userPassword) {
    return users.Users.findOne({where: {email: userEmail}})
    .then(userFound => {
      if(!userFound)
        return null;

    return bcrypt.compare(userPassword, userFound.password)
    .then((isValid) =>{return isValid});
    })
  },

  register(email, userPassword) {
    return this.registerPromise(email, userPassword)
        .then((res)=>{return res})
  },

  registerPromise(email, userPassword){
    return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(userPassword, salt, function(err, hashpassword){
          users.Users.create({email :email, password: hashpassword})
          .then(()=>{resolve({status: '/registered', isValid: true});
          })})
    })})
  },

}
