var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
//  res.send('respond with a resource');
  console.log('req.query.user=' + req.query.user);

  var list = ['123', '3333', '4444', '这是什么'];
  res.render('user',{
    user:
    {
      name:req.query.user
    },
    list:list
  });
});

module.exports = router;
