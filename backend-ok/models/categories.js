let mongoose = require('mongoose');

let categoriesSchema = mongoose.Schema({
    "name": String
},
{
    "collection": "categories"
});

module.exports = mongoose.model('categories', categoriesSchema);