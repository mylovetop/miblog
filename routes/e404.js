/**
 * Created by zdsoft on 14-7-11.
 */
var express         = require('express');
var router          = express.Router();


router.get('/', function(req, res){
  res.render('404');
});

module.exports = router;
