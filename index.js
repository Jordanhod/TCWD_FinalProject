const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')
const productsRouts = require ('./models/productsRouts');
const userRouts = require ('./models/userRouts');
const path = require('path');

app.use(session({
  secret: 'mouton cadet'
}));

app.use(express.static('angular-final-project/dist'));
app.use(bodyParser.json());

app.use('/api/products', productsRouts);
app.use('/api/myAccount', userRouts);


app.all('*', (req, res) => {
  res.sendFile(path.resolve('./angular-final-project/dist/index.html'));
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
