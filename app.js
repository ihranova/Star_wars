var express = require('express');

var app = express();
//Routes
var routes = require('./routes');



//files
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));

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