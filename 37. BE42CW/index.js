const express = require('express');
const app = express();

require('dotenv').config();
const { initializeDatabase } = require("./db/db.connect");
const Movie = require("./models/movies.models");

app.use(express.json());

initializeDatabase();

async function createMovie(newMovie){
  try{
    const movie = new Movie(newMovie)
    const saveMovie = await movie.save()
    return saveMovie
  } catch (error) {
    throw error
  }
}

app.post('/movies', async (req, res) => {
  try{
    const savedMovie = await createMovie(req.body)
    res.status(201).json({message: "Movie added successfully.", movie: savedMovie})
  } catch(error){
    res.status(500).json({error: "Failed to add movie"})
  }
})

// find a movie with a particulat title
async function readMovieByTitle(movieTitle){
  try{
    const movie = await Movie.findOne({title: movieTitle})
    return movie
  } catch(error){
    throw error
  }
}

app.get('/movies/:title', async (req, res) => {
  try{
    const movie = await readMovieByTitle(req.params.title)
    if(movie){
      res.json(movie)
    } else {
      res.status(404).json({error: "Movie not found."})
    }
  }catch(error){
    res.status(500).json({error: "Failed to fetch movie."})
  }
})

// to get all the movies in the database
async function readAllMovies(){
  try {
    const allMovies = await Movie.find()
    return allMovies
  } catch(error){
    console.log(error)
  }
}

app.get('/movies', async (req, res) => {
  try{
    const movies = await readAllMovies()
    if(movies.length != 0){
      res.json(movies)
    } else {
      res.status(404).json({error: 'No movies found.'})
    }
  } catch (error){
    res.status(500).json({error: 'Failed to fetch movies.'})
  }
})

// get movie by director name
async function readMovieByDirector(directorName){
  try{
    const movieByDirector = await Movie.findOne({director: directorName})
    return movieByDirector
  }catch(error){
    console.log(error)
  }
}

app.get('/movies/director/:directorName', async (req, res) => {
    try{
      const movies = await readMovieByDirector(req.params.directorName)
      if(movies.length != 0){
        res.json(movies)
      } else {
        res.status(404).json({error: 'Failed to fetch movies.'})
      }
    }catch(error){
      res.status(500).json({error: 'Failed to fetch movies.'})
    }
})

// get movie by genre
async function readMovieByGenre(genreName){
  try {
    const movieByGenre = await Movie.find({genre: genreName})
    return movieByGenre
  } catch (error){
    console.log(error)
  }
}

app.get('/movies/genres/:genreName', async (req, res) => {
  try{
    const movies = await readMovieByGenre(req.params.genreName)
    if(movies.length != 0){
      res.json(movies)
    } else {
      res.status(404).json({error: 'No movies found.'})
    }
  } catch {
    res.status(500).json({error: 'Failed to fetch movies.'})
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})