// Essential stuff
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var spotify= new Spotify(keys.spotify);
console.log(spotify);

//Command line interactions
var term= process.argv[2];
console.log(term);
var titulo= process.argv.slice(3).join(" ");
console.log(titulo);

// Action

var start = function() {
    if(term === "concert-this") {
        show();
    }else if(term === "movie-this") {
        movie();
    }
    // }else if( term === "spotify-this-song") {
    //     music();
    // }else if(term === "movie-this") {
    //     movie();
    // }
    
};

var show = function() {
    var artist = titulo;
    console.log(artist);
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(URL);
    axios.get(URL).then(function(response) {
        var jsonData = response.data;
        var artistData = [
            "Venue: " + jsonData[0].venue.name,
            "Location: " + jsonData[0].venue.city,
            "Date: " + jsonData[0].datetime
        ].join("\n\n");

        fs.appendFile("log.txt",artist + artistData, function(err) {
            if(err) throw(err);
            console.log(artistData);
        });
    });
};

var movie = function() {
    var pelicula = titulo;
    console.log(pelicula);
    var URL = "http://www.omdbapi.com/?t=" + pelicula + "&y=&plot=short&apikey=trilogy";
    console.log(URL);
    axios.get(URL).then(function(response) {
            var jsonData = response.data;
            //console.log(jsonData);
             var movieData = [
            "Title: " + jsonData.Title,
            "Year: " + jsonData.Year //year
            //imdb rating
            //rotten tomatos rating
            //country
            //language 
            //plot
            //actors 
             ];

             console.log(movieData);
        });
};


// var music = function() {
//     spotify.search({ type: "track",query: "All the small things"}, function(err, data) {
//     if(err) {
//         return console.log("Error occured " + err);
//     }
//     console.log(data);
// });
// };


start();