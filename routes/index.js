 //Home
exports.home = function(req,res){
   res.render("home");
};

//movie_single

exports.movie_single = function(req,res){
   var star_wars_episode = req.params.episode_number;
   res.send("This is page for episode " + star_wars_episode +" !");
};

//NotFound
exports.not_found = function(req,res){
   res.send("This is not page thaat you are looking for!");
};