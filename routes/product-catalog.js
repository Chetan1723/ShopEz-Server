var express = require('express');
var router = express.Router();
var itemMaster = require('../models/itemMaster');

router.get('/getAllItems', function (req, res, next) {
  itemMaster
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log('Mongo Error :' + err));
});

module.exports = router;
