var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET additional challenge. */
router.get('/challenge', function(req, res, next) {
	res.send('additional challenge');
});

module.exports = router;