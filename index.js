const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');


// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/animals')
mongoose.Promise = global.Promise;


// initialize routes
app.use(bodyParser.json());
app.use('/api', routes);


// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send(err.message);
});

// listening on port
app.listen(process.env.port || 4000, function(){
  console.log('listening to port on 4000')
});
