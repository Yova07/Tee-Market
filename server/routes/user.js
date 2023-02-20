const express = require('express');
const { signupUser, loginUser, getUser, updateDelivery, updateFacturation, updateFavorites, deleteFavorite } = require('../controller/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);

router.use(requireAuth);

router.get('/user', getUser);
router.patch('/updateDelivery', updateDelivery)
router.patch('/updateFacturation', updateFacturation)
router.patch('/updateFavorites', updateFavorites)
router.delete('/:id', deleteFavorite);

module.exports = router;