var express = require('express');

var app = express();
//Routes
var routes = require('./routes');

// views
app.set('view engine','ejs');


//Home
app.get('/',routes.home);

//movie_single

app.get('/star_wars_episode/:episode_number?',routes.movie_single);

//NotFound

app.get('*', routes.not_found);



app.listen(3000,function(){
  console.log("Running!");

});