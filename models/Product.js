const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schmea
const ProductSchema = new Schema({
  name: String,
  description: String,
  category: String,
  img: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
