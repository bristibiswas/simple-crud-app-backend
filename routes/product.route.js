const express = require('express');
const { getProducts } = require('../controllers/product.controller.js');
const { getOneProduct } = require('../controllers/product.controller.js');
const { createProduct } = require('../controllers/product.controller.js');
const { updateProduct } = require('../controllers/product.controller.js');
const { deleteProduct } = require('../controllers/product.controller.js');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.post('/', createProduct);
router.put('/:id' , updateProduct) ;
router.delete('/:id' , deleteProduct)



module.exports = router;