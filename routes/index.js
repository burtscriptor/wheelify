var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InclusiveDine' });
  //optionally res.redirect('/mainpage');
});

router.get('/about',function(request, respond){
  respond.render('about', { title: 'About' })
})
module.exports = router;
