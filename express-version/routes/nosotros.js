var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nosotros', { 
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1
  });
});

module.exports = router;