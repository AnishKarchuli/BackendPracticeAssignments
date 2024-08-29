require('dotenv').config();
const { initializeDatabase } = require('./db/db.connect');

const Restaurant = require('./models/restaurants.models');

initializeDatabase();

/*
const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};
*/

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};

async function createRestaurant(newRestaurant){
  try{
    const restaurant = new Restaurant(newRestaurant)
    const saveRestaurant = await restaurant.save();
    console.log('New Restaurant Data: ', saveRestaurant)
  } catch (error){
    throw error;
  }
}

// createRestaurant(newRestaurant)

// read all restaurants from the database
async function readAllRestaurants(){
  try {
    const allRestaurants = await Restaurant.find()
    console.log(allRestaurants)
  } catch(error) {
    throw error;
  }
}

// readAllRestaurants();

// read restaurant by its name

async function readRestaurantByName(restaurantName){
  try {
    const restaurant = await Restaurant.findOne({name: restaurantName})
    console.log(restaurant)
  } catch(error) {
    throw error;
  }
}

// readRestaurantByName("New Restaurant");

// read all restaurants which offers reservations

async function readReservationsOfferedAllRestaurants(isReservation){
  try{
    const restaurant = await Restaurant.find({reservationsNeeded: isReservation})
    console.log(restaurant)
  } catch(error){
    throw error;
  }
}

// readReservationsOfferedAllRestaurants(true)

// read all restaurants which offers delivery

async function readDeliveryOfferedAllRestaurants(isDelivery){
  try {
    const restaurant = await Restaurant.find({isDeliveryAvailable: isDelivery})
    console.log(restaurant)
  } catch(error){
    throw error;
  }
}

// readDeliveryOfferedAllRestaurants(true);

// read restaurant by phone number

async function readRestaurantByPhoneNumber(restaurantPhoneNumber){
  try{
    const restaurant = await Restaurant.findOne({phoneNumber: restaurantPhoneNumber})
    console.log(restaurant)
  }catch(error){
    console.log(error)
  }
}

// readRestaurantByPhoneNumber("+1288997392")

// read all restaurants by cuisine

async function readAllRestaurantsByCuisine(cuisineName){
  try{
    const restaurant = await Restaurant.find({cuisine: cuisineName})
    console.log(restaurant)
  } catch(error){
    throw error;
  }
}

readAllRestaurantsByCuisine("Italian")