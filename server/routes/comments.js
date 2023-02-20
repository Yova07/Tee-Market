const express = require('express');
const { createComment, getComments, getStars } = require('../controller/commentsController')

const router = express.Router();

router.post('/:id/create', createComment);
router.get('/:id', getComments);
router.get('/stars/:id', getStars)

module.exports = router;