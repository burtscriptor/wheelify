const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews')

router.post('/:id/reviews', reviewsController.create);
router.get('/new', reviewsController.new);
router.delete('/:id', reviewsController.delete);

module.exports = router;