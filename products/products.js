const Sequelize = require('sequelize');
const db = require ('../db');

const Brides = db.define('brides',
{ sku: Sequelize.INTEGER,
  name: Sequelize.STRING,
  pics: Sequelize.STRING,
  tags: Sequelize.STRING,
  designer: Sequelize.STRING,
  cost: Sequelize.DECIMAL,
  currency: Sequelize.STRING,
  rating: Sequelize.DECIMAL,
  link: Sequelize.STRING,
  timestamps: false });

const Pics = db.define('pics',
{ pics: Sequelize.STRING,
  product_name: Sequelize.STRING,
  pic_number: Sequelize.INTEGER,},
{ timestamps: false });

module.exports = {
  Brides,
  Pics
}
