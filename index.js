const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')
const users = require ('./users/users-model');
const products = require ('./products/products-model');
const productsRouts = require ('./products/productsRouts');
const userRouts = require ('./users/userRouts');

const productSQL = require ('./products/products.js');

app.use(session({
  secret: 'mouton cadet'
}));

app.use(express.static('angular-final-project/dist'));
app.use(bodyParser.json());

app.use('/api/products', productsRouts);
app.use('/api/myAccount', userRouts);

// app.all('*', (req, res)=>{
//   res.redirect('/');
// res.send('404','page not found');
// });

app.listen(8080, () => {
  console.log('server listening on port 8080');
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/36104636_011_d', product_name: 'Bridgette Gown', pic_number: 0});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/36104636_011_b', product_name: 'Bridgette Gown', pic_number: 1});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/36104636_011_c', product_name: 'Bridgette Gown', pic_number: 2});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/33175589_011_a', product_name: 'Adelaide Gown', pic_number: 0});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/33175589_011_b', product_name: 'Adelaide Gown', pic_number: 1});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/33175589_011_c', product_name: 'Adelaide Gown', pic_number: 2});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/38613352_013_a', product_name: 'Naya Dress', pic_number: 0});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/38613352_013_b', product_name: 'Naya Dress', pic_number: 1});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/38613352_013_c', product_name: 'Naya Dress', pic_number: 2});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/44054005_011_a', product_name: 'Avalon Gown', pic_number: 0});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/44054005_011_b', product_name: 'Avalon Gown', pic_number: 1});
  // productSQL.Pics.create({pics: 'https://s7d1.scene7.com/is/image/BHLDN/44054005_011_c', product_name: 'Avalon Gown', pic_number: 2});

});
