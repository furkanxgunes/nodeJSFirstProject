const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/product-test');

//create Schmea
const ProductSchema = new Schema({
  name: String,
  desc: String,
  date: String,
});

const Product = mongoose.model('product', ProductSchema);

//create a data
// Product.create(
//   {
//     name: 'Product1',
//     desc: 'New Link',
//     date: '25/12/2008',
//   },
//   { name: 'Product2', desc: 'New Lin2', date: '25/12/2018' }
// ); 

// Product.deleteMany({ $and: [{ name: 'Product1' },{desc:'New Link'}]}).then(function() {
//     console.log("data deleted");
// }).catch(function(err) {
//     console.log(err);
// });

Product.find({}, (err, data) => {
  console.log(data);
});
