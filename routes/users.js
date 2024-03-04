var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users');

/* GET users listing. */
router.get('/dashboard', usersController.index);


module.exports = router;
