const express = require('express');
const { getProducts, getProductsByCategory, getProductByName, createProduct, deleteProduct, updateProduct, createComment} = require('../productsController.js/productsController');

const router = express.Router();

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/product/:product', getProductByName);
router.post('/', createProduct);
router.post('/comment', createComment);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);

module.exports = router;