const express = require('express');
const routes = require('./routes/api');
// set up express app
const app = express();

// initialize routes
app.use('/api', routes);

// listening on port
app.listen(process.env.port || 4000, function(){
  console.log('listening to port on 4000')
})
