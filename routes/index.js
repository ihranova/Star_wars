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

//NotFound
exports.not_found = function(req,res){
   res.send("This is not page thaat you are looking for!");
};