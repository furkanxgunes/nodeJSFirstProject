const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');

const path = require('path');
const ejs = require('ejs');

const Product = require('./models/Product');
const productController = require('./controllers/productController');
const pageController = require('./controllers/pageController');

const app = express();

//connect DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/product-test');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', pageController.getIndex);
app.get('/index', pageController.getIndex);
app.get('/accounts',pageController.getAccountsPage);
app.get('/add-product', pageController.getAddProductPage);

app.get('/products',productController.getAllProducts);   
app.get('/edit-product/:id', productController.getProduct);
app.get('/delete-product/:id', productController.deleteProduct);
app.post('/products/add', productController.createProduct);
app.post('/products/edit/:id', productController.updateProduct);

const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} port is started`);
});
