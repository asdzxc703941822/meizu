const express = require('express');
const app = express();
const bodyparse = require('body-parser');
const session = require('express-session');
const user = require('./routes/user');
const index = require('./routes/index');
const products = require('./routes/products');
app.listen(3000);
app.use(bodyparse.urlencoded({extended:false}));
app.use(session({
  secret: '随机字符串', 
  cookie: {maxAge: 60 * 1000 * 30},
  resave: true
}))
app.use(express.static('./public'));
app.use('/user',user);
app.use('/index',index);
app.use('/products',products);