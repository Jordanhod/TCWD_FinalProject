const db = require ('../db');
const Sequelize = require('sequelize');
const { Products } = require ('./products');

const Users = db.define('users',
{email: Sequelize.STRING,
 password: Sequelize.DECIMAL},
{ timestamps: false });

const Wishlist = db.define('wishlists',
{user_id: Sequelize.INTEGER,
  product_id: Sequelize.INTEGER},
{ timestamps: false });

// Wishlist.hasMany(Products);
Wishlist.belongsTo(Products, {as: 'products', foreignKey: 'product_id'});

module.exports = {
  Users,
  Wishlist
}
