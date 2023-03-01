const express = require('express');
const { getProducts,
        getProductsByCategory,
        getProductByName,
        deleteProduct,
        getProductBySearchBar,
        updateNote,
        getProductsByPopularity
} = require('../controller/productsController');

const router = express.Router();

router.get('/', getProducts);
router.get('/popular', getProductsByPopularity)
router.get('/category/:category', getProductsByCategory);
router.get('/product/:product', getProductByName);
router.delete('/:id', deleteProduct);
router.get('/search/:product', getProductBySearchBar);
router.patch('/note/:id', updateNote)

module.exports = router;