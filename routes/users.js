var express = require('express');
var router = express.Router();
var user= require('../models/user.model');
/* GET users listing. */
router.get('/', function(req, res, next) {
  user.getuser();
  // await user.getuser();
});

module.exports = router;
