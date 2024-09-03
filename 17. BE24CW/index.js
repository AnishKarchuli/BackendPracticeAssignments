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

// readMovieByDirector("Kabir Khan")

// find a movie by id and update it's rating

async function updateMovie(movieId, dataToUpdate){
  try{
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true})
    console.log(updatedMovie)
  } catch(error) {
    console.log("Error in updating movie rating", error)
  }
}

// updateMovie("66d4a91a8985178bdee91296", {rating: 8.0})

// find a movie by id and update it's release year

async function updateMovie(movieId, dataToUpdate){
  try{
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true})
    console.log(updatedMovie)
  } catch(error) {
    console.log("Error in updating movie rating", error)
  }
}

// updateMovie("66d4a91a8985178bdee91296", {releaseYear: 2002})

// find one data and update its value

async function updateMovieDetail(movieTitle, dataToUpdate){
  try{
    const updatedMovie = await Movie.findOneAndUpdate({title: movieTitle}, dataToUpdate, {new: true})
    console.log(updatedMovie)
  } catch(error){
    console.log("Error in changing data:", error)
  }
}

// updateMovieDetail("Kabhi Khushi Kabhie Gham", {releaseYear: 2001})

// find a movie by id and delete from the database

async function deleteMovie(movieId){
  try{
    const deleteMovie = await Movie.findByIdAndDelete(movieId)
  }catch(error){
    console.log("Error in Deleting Movie", error)
  }
}

// deleteMovie("66d4aacdbb323e4d3e35ae74")

async function deleteMovieFromDb(movieTitle){
  try{
    const deletedMovie = await Movie.findOneAndDelete({title: movieTitle})
    console.log("This movie was deleted:", deletedMovie)
  }catch(error) {
    console.log("Error in movie deletion", error)
  }
}

deleteMovieFromDb("3 Idiots")