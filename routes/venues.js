const express = require('express');
const router = express.Router();
//const upload = require('../utilies/multer');
const venuesController = require('../controllers/venues');


router.get('/', venuesController.index);
router.get('/new', venuesController.new);
router.get('/:id', venuesController.show); // upload.single('image')
router.post('/', venuesController.create);
//router.post('/', venuesController.createReview);


module.exports = router;