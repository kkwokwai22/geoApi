const express = require('express');

// set up express app
const app = express();



// listening on port
app.listen(process.env.port || 4000, function(){
  console.log('listening to port on 4000')
})


// testing
