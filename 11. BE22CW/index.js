require('dotenv').config();
const { initializeDatabase } = require("./db/db.connect");
const Movie = require("./models/movies.models");

initializeDatabase();


const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Director",
  actors: ["Actor1", "Actor2"],
  language: "Hindi",
  country: "India",
  rating: 6.1,
  plot: "A young man and woman fall in love on a Australia trip.",
  awards: "IIFA Awards",
  posterUrl: "https://example.com/new-poster1.jpg",
  trailerUrl: "https://example.com/new-trailer1.mp4",
};

async function createMovie(newMovie){
  try{
    const movie = new Movie(newMovie)
    const saveMovie = await movie.save()
    console.log("New Movie data:", saveMovie)
  } catch (error) {
    throw error
  }
}

// createMovie(newMovie)


// find a movie with a particulat title

async function readMovieByTitle(movieTitle){
  try{
    const movie = await Movie.findOne({title: movieTitle})
    console.log(movie)
  } catch(error){
    throw error
  }
}

// readMovieByTitle("Dilwale Dulhania Le Jayenge")

// to get all the movies in the database

async function readAllMovies(){
  try {
    const allMovies = await Movie.find()
    console.log(allMovies)
  } catch(error){
    console.log(error)
  }
}

// readAllMovies();

// get movie by director name

async function readMovieByDirector(directorName){
  try{
    const movieByDirector = await Movie.findOne({director: directorName})
    console.log(movieByDirector)
  }catch(error){
    console.log(error)
  }
}

readMovieByDirector("Kabir Khan")