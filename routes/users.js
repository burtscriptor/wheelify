var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users');

/* GET users listing. */
router.get('/dashboard', usersController.index);
router.get('/:id/edit', usersController.edit);

router.put('/:id/edit', usersController.update);




module.exports = router;
