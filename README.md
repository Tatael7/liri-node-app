# liri-node-app
An app that searches the various kinds of API information via interactivity
with the command line.

### The Start
So to begin the app must first have a valid set of Spotify API keys or you wont be able to 
pull information on the songs you wish to look up.

So, what can you do? Well quite a couple of things, you can look up some very basic information on
a movie of your choice, a song of your choice, or information on an artist/band to check when their next concert 
will be and where it'll be.

### The Process  ###
When using bash/terminal one must first access the root of the applications directory. 
The next step is to type the following line

node liri.js

This will ensure the the program is run. 
Next step is supremely important, you must decide whether you want to liik up a song, a movie, or a concert.
Once decided you simply type;

concert-this          for a concert
movie-this            for a movie
spotify-this-song     for a song


All the searches you make will be logged in a text file named log.txt
Have fun
