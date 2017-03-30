const express = require('express');
const router = express.Router();

// get a list of animals from db
router.get('/animals', function(req, res){
    res.send({
      type:'GET'
    })
});

// add a new animal in db
router.post('/animals', function(req, res){
    console.log(req.body)
    res.send({
      type: 'POST',
      name: req.body.name,
      rank: req.body.rank
    })
});

// update an animals in db
router.put('/animals/:id', function(req, res){
    res.send({
      type:'PUT'
    })
});

// delete an animal from db
router.delete('/animals/:id', function(req, res){
    res.send({
      type:'DELETE'
    })
});

module.exports = router;
