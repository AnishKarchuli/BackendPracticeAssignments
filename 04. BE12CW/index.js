require('dotenv').config();
const { initializeDatabase } = require('./db/db.connect');
const fs = require('fs');
const Movie = require('./models/movies.models')

initializeDatabase();

const jsonData = fs.readFileSync('movies.json', 'utf-8')

const moviesData = JSON.parse(jsonData)

function seedData(){
  try {
    for(const movieData of moviesData){
      const newMovie = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl,
      })

      newMovie.save()
      console.log('Movie Data: ', newMovie.title)
    }
  } catch (error) {
    console.log("Error seeding the data", error)
  }  
}

seedData();