var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users');

/* GET users listing. */
router.get('/dashboard', usersController.index);
//router.delete('/')


module.exports = router;
