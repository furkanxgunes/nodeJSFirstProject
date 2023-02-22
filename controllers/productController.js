const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});

  res.render('products', {
    products,
  });
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  res.render('edit-product', {
    product,
  });
};

exports.createProduct = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/products');
};

exports.updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id,req.body);
  res.redirect('/products');
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};
