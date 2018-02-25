const Sequelize = require('sequelize');
const db = require ('../db');

const Products = db.define('products',
{ type: Sequelize.STRING,
  name: Sequelize.STRING,
  designer: Sequelize.STRING,
  cost: Sequelize.DECIMAL,
  currency: Sequelize.STRING,
  rating: Sequelize.DECIMAL,
  link: Sequelize.STRING,},
{ timestamps: false });


const Pics = db.define('pics',
{ type: Sequelize.STRING,
  pics: Sequelize.STRING,
  product_name: Sequelize.STRING,
  product_id: Sequelize.INTEGER,
  pic_number: Sequelize.INTEGER},
{ timestamps: false });

Pics.belongsTo(Products, {as: 'product', foreignKey: 'product_id'});

module.exports = {
  Products,
  Pics
}
