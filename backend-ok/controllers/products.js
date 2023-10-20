// import the db in here
// controller logic
const Product = require('../models/products');

// module.exports = {
//     getProducts: function(req, res, next) {
//       // 
//       res.json({
//         "messages": "Welcome to the api server"
//       });
//     },

//     // get product by id
//     // create, update, delete
//     // search
//     const Product = require('../models/product'); // Import the Product model

module.exports = {
    // a: 1,
    // bce: function (res)  {
    // console.log("hello world")

    // },
    // Get all products
    getProducts: async function(req, res, next) {
        try {
            // console.log("hey : Product \n", Product);
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // Get product by ID
    getProductById: async function(req, res, next) {
        try {
            const product = await Product.findById(req.params.id);
            res.json(product);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // Add new product
    addProduct: async function(req, res, next) {
        try {
            const product = new Product(req.body);
            await product.save();
            res.status(201).json(product);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // Update product by ID
    updateProductById: async function(req, res, next) {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(product);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // Remove product by ID
    removeProductById: async function(req, res, next) {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // Remove all products
    removeAllProducts: async function(req, res, next) {
        try {
            await Product.deleteMany();
            res.status(204).send();
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // Find all products with names that contain a specified keyword
    searchProducts: async function(req, res, next) {
        try {
            let products = {};
            if (req.query.name) {
                 products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
            } else {
                 products = await Product.find();
            }
            res.json(products);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};