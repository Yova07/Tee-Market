const express = require('express');
const { getProducts, getProductsByCategory, getProductByName, createProduct, deleteProduct, updateProduct} = require('../productsController.js/productsController');

const router = express.Router();

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/product/:product', getProductByName);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);

module.exports = router;