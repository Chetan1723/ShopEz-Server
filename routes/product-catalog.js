var express = require('express');
var router = express.Router();
var ClothMaster = require('../models/clothItemMaster');

router.get('/getAllItems', function(req, res, next) {
  ClothMaster.find().then((result)=>{
    res.send(result);
  }).catch((err)=>console.log("Mongo Error :"+err))  
});

module.exports = router;
