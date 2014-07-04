var express = require('express');
var router = express.Router();
var pool =


router.get('/', function(req, res){
  console.log(req.query.name);
  res.render('login');
});

module.exports = router;
