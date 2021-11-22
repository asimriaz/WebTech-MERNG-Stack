var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    login: false 
  });
});

/* POST Login. */
router.post('/login', function(req, res, next) {
  console.log('Request Params :>> ', req.body);

  let valid = false;

  if(req.body.username === 'Smith'){
    valid = true
  }

  res.render('index', { 
    title: 'Express', 
    login: valid
  });

});

module.exports = router;
