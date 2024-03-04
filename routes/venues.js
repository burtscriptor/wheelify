const express = require('express');
const router = express.Router();
const venuesController = require('../controllers/venues')

router.get('/', venuesController.index);
router.get('/new', venuesController.new);
router.get('/:id', venuesController.show);
router.post('/', venuesController.create);


module.exports = router;