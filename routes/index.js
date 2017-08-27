var express = require('express');
var router = express.Router();
var data = require('../model/Schema');

//var app = require('../app')
/* GET home page. */
router.get('/', function(req, res, next) {
    data.find({}, function(err, data2){
    	if(err){
    		res.send('error has occured');
    	}
    	else{
    		res.json(data2);
    	}
    });

});
module.exports = router;
