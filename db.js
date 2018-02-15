const Sequelize = require('sequelize');

module.exports = new Sequelize('feelinggood', 'root', 'yarden', {
  host: 'localhost',
  dialect: 'mysql'
});
