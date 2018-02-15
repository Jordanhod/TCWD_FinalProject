const Sequelize = require('sequelize');
const db = require ('../db');

const Users = db.define('users',
{email: Sequelize.STRING,
 password: Sequelize.DECIMAL},
{ timestamps: false });


module.exports = {
  Users
}
