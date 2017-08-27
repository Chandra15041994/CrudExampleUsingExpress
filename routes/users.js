var express = require('express');
var router = express.Router();
var data = require('../model/Schema');


router.post('/', function(req, res, next) {
    
    var post = new data({
     
      Name : req.body.Name,
      EmpId : req.body.EmpId,
      Address : req.body.Address,
    });

    post.save(function(err, post){
        if(err) { return next }
        	console.log(post);
            res.send(post);
    })



   
});
module.exports = router;