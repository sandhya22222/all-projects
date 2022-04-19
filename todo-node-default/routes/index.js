var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , name:'Sandhya'});
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact', { title: 'Contact us ', name: 'Sandy' });
});

module.exports = router;
