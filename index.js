const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
// set up express app
const app = express();

// initialize routes
app.use(bodyParser.json());
app.use('/api', routes);

// listening on port
app.listen(process.env.port || 4000, function(){
  console.log('listening to port on 4000')
});
