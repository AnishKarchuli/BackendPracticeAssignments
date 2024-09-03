require('dotenv').config();
const Car = require('./models/cars.models');
const { initializeDatabase } = require('./db/db.connect')

initializeDatabase();

// Problem 1

/*
const carData = {
    brand: "Ford",
    model: "Mustang",
    year: 2019,
    bodyStyle: "Convertible",
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "5.0L V8",
    mileage: 25000,
    color: "Red",
    price: 3500000,
    condition: "Used",
    description: "Exciting Ford Mustang convertible with powerful V8 engine.",
    photos: [
      "https://example.com/mustang-photo1.jpg",
      "https://example.com/mustang-photo2.jpg",
      "https://example.com/mustang-photo3.jpg"
    ]
  };
  */

  // Problem 2

  const carData = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    bodyStyle: "Coupe",
    fuelType: "Gasoline",
    transmission: "Manual",
    engine: "1.5L Turbocharged Inline-4",
    mileage: 40000,
    color: "Black",
    price: 1800000,
    condition: "Used",
    description: "Sporty Civic coupe with low mileage and manual transmission.",
    photos: [
      "https://example.com/civic-photo1.jpg",
      "https://example.com/civic-photo2.jpg",
      "https://example.com/civic-photo3.jpg"
    ]
  };

  async function createCar(carData){
    try{
        const car = new Car(carData);
        const saveCar = await car.save();
        console.log('New Car Data:', saveCar)
    } catch (error){
        throw error;
    }
  }

  // createCar(carData)

// Problem 3

async function readAllCars(){
  try{
    const allCars = await Car.find();
    console.log(allCars)
  }catch(error){
    console.log(error)
  }
}

// readAllCars();

// Problem 4

async function readCarsByBrand(carBrand){
  try{
    const car = await Car.findOne({brand: carBrand})
    console.log(car)
  }catch(error){
    console.log(error)
  }
}

// readCarsByBrand("Ford")

// Problem 5

async function readCarsByColor(carColor){
  try{
    const car = await Car.find({color: carColor})
    console.log(car);
  }catch(error){
    throw error;
  }
}

// readCarsByColor("Black")

// Problem 6

async function updateCarPriceByModel(carModel, dataToUpdate){
  try{
    const updatedCar = await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new: true})
    console.log(updatedCar)
  }catch(error){
    throw error;
  }
}
// updateCarPriceByModel("Corolla", {price: 2300000})

// Problem 7

async function updateCarConditionByModel(carModel, dataToUpdate){
  try{
    const updatedCar = await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new: true})
    console.log(updatedCar)
  }catch(error){
    throw error;
  }
}

// updateCarConditionByModel("Model S", {condition: "Used"})

// Problem 8

async function deleteCarById(carId){
  try{
    const deleteCar = await Car.findByIdAndDelete(carId)
    console.log(deleteCar)
  }catch(error){
    throw error;
  }
}

// deleteCarById("66d4aa7825dcd85b1ae97832")

// Problem 9

async function deleteCarByBodyStyle(carBodyStyle){
  try{
    const deleteCar = await Car.findOneAndDelete({bodyStyle: carBodyStyle})
    console.log(deleteCar)
  }catch(error){
    console.log("Error in deleting car data", error)
  }
}

deleteCarByBodyStyle("Coupe")