var express = require('express');

// modules required for routing
let router = express.Router();
// const products = require('../models/products');

const { getProducts, getProductById, addProduct,
  removeAllProducts, removeProductById, updateProductById,
  searchProducts
  } = require('../controllers/products');


// define the product model
let product = require('../models/products');

/* GET products List page. READ */
// router.get('/', (req, res, next) => {
//   // find all products in the products collection
//   product.find( (err, products) => {
//     if (err) {
//       return console.error(err);
//     }
//     else {
//       res.render('products/index', {
//         name: 'products',
//         products: products
//       });
//     }
//   });

// });

// router.get('/', getProducts);

//  GET the product Details page in order to add a new product
router.get('/add', (req, res, next) => {
  res.render('products/details', {
    name: 'Add Product', products: ''
  });
});

// POST process the product Details page and create a new product - CREATE
 //router.post('/add', (req, res, next) => {
//   let newProduct = product({
//     "Name": req.body.name,
//     "Owner": req.body.owner,
//     "Description": req.body.description,
//     "Type": req.body.type,
//     "Price": req.body.price
//   })

//   products.create(newproduct, (err, products) => {
//     if (err){
//       console.log(err);
//       res.end(err);
//     }
//     else{
//       res.redirect('/products');
//     }
//   })
// });

// GET the product Details page in order to edit an existing product
// router.get('/:id', function(req, res, next) {
//   let id = req.params.id;

//   products.findById(id, (err, productToEdit) => {

//     if (err){
//       console.log(err);
//       res.end(err);
//     }
//     else{
//       res.render('products/details', {
//         name: 'Edit product', 
//         products: productToEdit});
//     }
//   })

// });
router.get('/:id', getProductById) ;


// POST - process the information passed from the details form and update the document
router.put('/:id', updateProductById);

// GET - process the delete by user id
router.delete('/:id', removeProductById);

// TODO
router.delete('/', removeAllProducts);
router.post('/', addProduct);
router.get('/', searchProducts);


module.exports = router;

