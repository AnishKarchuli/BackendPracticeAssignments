require('dotenv').config();
const { initializeDatabase } = require('./db/db.connect')
const fs = require('fs');
const Car = require('./models/cars.models')

initializeDatabase();

const jsonData = fs.readFileSync('cars.json', 'utf-8')

const carsData = JSON.parse(jsonData)

function seedData(){
  try {
    for(const carData of carsData){
      const newCar = new Car({
        make: carData.make,
        model: carData.model,
        year: carData.year
      })

      newCar.save()
      console.log('Car Data: ', newCar)
    }
  } catch (error) {
    console.log("Error seeding the data", error)
  }  
}

seedData();