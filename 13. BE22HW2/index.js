require('dotenv').config();
const {initializeDatabase} = require('./db/db.connect');

const Hotel = require('./models/hotels.models');

initializeDatabase();

/*
const newHotel = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
};
*/

const newHotel = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};

async function createHotel(newHotel){
  try{
    const hotel = new Hotel(newHotel)
    const saveHotel = await hotel.save()
    console.log('New Hotel Data: ', saveHotel)
  } catch(error){
    throw error
  }
}

// createHotel(newHotel);

// read all Hotels from the database

async function readAllHotels(){
  try{
    const allHotels = await Hotel.find()
    console.log(allHotels)
  } catch(error){
    throw error
  }
}

// readAllHotels();

async function readHotelByName(hotelName){
  try{
    const hotel = await Hotel.findOne({name: hotelName})
    console.log(hotel)
  }catch(error){
    throw error
  }
}

// readHotelByName('Lake View')

async function readParkingSpaceOfferedHotels(isParking){
  try{
    const hotel = await Hotel.find({isParkingAvailable: isParking})
    console.log(hotel)
  }catch(error){
    throw error;
  }
}

// readParkingSpaceOfferedHotels(true)

async function readAllHotelsWithRestaurant(isRestaurant){
  try{
    const allHotels = await Hotel.find({isRestaurantAvailable: isRestaurant})
    console.log(allHotels)
  }catch(error){
    throw error;
  }
}

// readAllHotelsWithRestaurant(true)

async function readAllHotelsByCategory(categoryName){
  try{
    const allHotels = await Hotel.find({category: categoryName})
    console.log(allHotels)
  }catch(error){
    throw error;
  }
}

// readAllHotelsByCategory('Mid-Range')

async function readAllHotelsByPriceRange(priceRange){
  try{
    const allHotels = await Hotel.find({priceRange: priceRange})
    console.log(allHotels)
  }catch(error){
    throw error;
  }
}

// readAllHotelsByPriceRange('$$$$ (61+)')

async function readAllHotelsByRating(rating){
  try{
    const allHotels = await Hotel.find({rating: rating})
    console.log(allHotels)
  }catch(error){
    throw error;
  }
}

// readAllHotelsByRating(4.0)

async function readHotelByPhoneNumber(phoneNumber){
  try{
    const hotel = await Hotel.findOne({phoneNumber: phoneNumber})
    console.log(hotel)
  }catch(error){
    throw error;
  }
}

readHotelByPhoneNumber('+1299655890')