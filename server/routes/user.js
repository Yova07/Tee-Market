const express = require('express');
const { signupUser } = require('../productsController.js/userController');

const router = express.Router();

router.post('/signup', signupUser);

module.exports = router;