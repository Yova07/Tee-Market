const express = require('express');
const { getProducts,
        getProductsByCategory,
        getProductByName,
        createProduct,
        deleteProduct,
        updateProduct,
        getProductBySearchBar,
        updateNote,
        getProductsByPopularity
} = require('../controller/productsController');

const router = express.Router();

router.get('/', getProducts);
router.get('/popular', getProductsByPopularity)
router.get('/category/:category', getProductsByCategory);
router.get('/product/:product', getProductByName);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);
router.get('/search/:product', getProductBySearchBar);
router.patch('/note/:id', updateNote)

module.exports = router;