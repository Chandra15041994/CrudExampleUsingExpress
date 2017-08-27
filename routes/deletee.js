var express = require('express');
var router = express.Router();
var data = require('../model/Schema');


router.delete('/:Address', function(req, res){
  data.remove({Address: req.params.Address}, 
     function(err,docs){
    if(err) res.json(err);
    else res.send('Removed');
     
  });
});


module.exports = router;