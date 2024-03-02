const express = require('express');
const router = express.Router();
const venuesController = require('../controllers/venues')

router.get('/', venuesController.index);
router.get('/new', venuesController.new);

module.exports = router;