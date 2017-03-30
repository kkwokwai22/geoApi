const express = require('express');
const Animals = require('../models/animals');
const router = express.Router();

// get a list of animals from db
router.get('/animals', function(req, res){
    res.send({
      type:'GET'
    })
});

// add a new animal in db
router.post('/animals', function(req, res, next){
    Animals.create(req.body).then(function(animals){
      res.send({
        animals
      })
    }).catch(next)
  });


// update an animals in db
router.put('/animals/:id', function(req, res, next){
    Animals.findByIdAndUpdate({
      _id: req.params.id
    }, req.body).then(function(){
        Animals.findOne({_id: req.params.id}).then(function(animals){
        res.send('updated ' + animals);
      })
    })
});

// delete an animal from db
router.delete('/animals/:id', function(req, res, next){
    Animals.findByIdAndRemove({
      _id: req.params.id
    }).then(function(animals){
      res.send('deleted ' + animals.name)
    })
});

module.exports = router;
