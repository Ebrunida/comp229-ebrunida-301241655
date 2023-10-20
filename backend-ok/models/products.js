let mongoose = require('mongoose');

let productsSchema = mongoose.Schema({
    "name": String,
    "description": String,
    "price": Number,
    "quantity": Number,
    "categrory": String
},
{
    "collection": "products"
});

module.exports = mongoose.model('products', productsSchema);