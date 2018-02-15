const users = require ('./users');
const bcrypt = require ('bcrypt');
const saltRounds = 10;
const Sequelize = require('sequelize');


module.exports = {

  loginRequest(email, userPassword) {
    return users.Users.findOne({email})
    .then(userFound => {
      if(!userFound)
        return null;

    return bcrypt.compare(userPassword, userFound.password)
    .then((isValid) =>{return isValid});
    })
  },

  registerSQL(email, userPassword) {
    return this.registerPromise(email, userPassword)
        .then((res)=>{return res})
  },

  registerPromise(email, userPassword){
    return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(userPassword, salt, function(err, hashpassword){
          users.Users.create({email :email, password: hashpassword})
          .then(()=>{resolve({status: '/registered', isValid: true});
          // .catch((rej)=>console.log(rej, email, hashpassword));
          })})
    })})
  },

}
