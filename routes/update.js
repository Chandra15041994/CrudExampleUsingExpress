var express = require('express');
var router = express.Router();
var data = require('../model/Schema');


router.put('/:Name', function(req, res){
  data.update({Name: req.params.Name},
                     {
            EmpId: req.body.EmpId,
            Address  : req.body.Address
         }, function(err, docs){
        if(err) res.json(err);
        else { 
          console.log(docs);
          res.send(docs); 
        }
       });
});


module.exports = router;



