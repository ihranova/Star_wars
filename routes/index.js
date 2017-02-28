//Data

var moviesJSON = require('../movies.json');

 //Home
exports.home = function(req,res){
   
   var movies = moviesJSON.movies;

   var moviePosters = [];
   for (var i = 0; i < movies.length; i++) {
        moviePosters = moviePosters.concat(movies[i].poster);
   }
   	res.render("home",{
   	title : "Star Wars Movies",
   	movies: movies,
   	moviePosters: moviePosters
   });


};

//movie_single

exports.movie_single = function(req,res){
   var star_wars_episode = req.params.episode_number;
    var movies = moviesJSON.movies;

    if(star_wars_episode >= 1 && star_wars_episode <= 6){
    	var movie = movies[star_wars_episode - 1];
	    var title = movie.title;
	    var main_characters = movie.main_characters;
	   res.render('movie_single',{
	    movies: movies,
	    title: title,
	    movie: movie,
	    main_characters:  main_characters 
	   });
    }else{
    	res.send("This is not page thaat you are looking for!");
    }
    
};

exports.login = function(req,res){
  var movies = moviesJSON.movies;

  res.render('login',{
     title : "Login",
     movies: movies,
     show_message: false
     
  });
};
exports.dash = function(req,res){
  var movies = moviesJSON.movies;
   response = {
    id: req.query.id,
    password: req.query.password
   };
   console.log(response);
    if(response.id == 'admin' &&  response.password == 'admin'){
        res.render('dash',{ movies: movies,dash: 'Dashboard',show_message:true,success_message:"Success!Indicates a successful or positive action."});
     }
     else{
     res.render('login',{
      title : "Login",
      movies: movies,
      show_message:true ,
      error_message:"Error! I don't know for you!"});
    }


};

//NotFound
exports.not_found = function(req,res){
   res.send("This is not page thaat you are looking for!");
};