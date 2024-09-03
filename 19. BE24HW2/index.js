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

// readHotelByPhoneNumber('+1299655890')

// Problem 1

async function updateHotelById(hotelId, dataToUpdate){
  try{
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {new: true})
    console.log(updatedHotel)
  } catch{
    console.log("Error in updating hotel checkOutTime", error)
  }
}

// updateHotelById("66d4ad5655267e743133befd", {checkOutTime: "11:00 AM"})

// Problem 2

async function updateHotelByName(hotelName, dataToUpdate){
  try{
    const updatedHotel = await Hotel.findOneAndUpdate({name: hotelName}, dataToUpdate, {new: true})
    console.log(updatedHotel)
  }catch{
    console.log("Error in updating hotel name", error)
  }
}

// updateHotelByName("Sunset Resort", { rating: 4.2})

// Problem 3

async function updateHotelByPhoneNumber(hotelPhoneNumber, dataToUpdate){
  try{
    const updatedHotel = await Hotel.findOneAndUpdate({phoneNumber: hotelPhoneNumber}, dataToUpdate, {new: true})
    console.log(updatedHotel)
  }catch{
    console.log("Error in updating hotel phone number", error)
  }
}

// updateHotelByPhoneNumber("+1299655890", {phoneNumber: "+1997687392"})

// Problem 1

async function deleteHotelById(hotelId){
  try{
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId)
    console.log(deletedHotel)
  }catch{
    console.log("Error in deleting hotel", error)
  }
}

// deleteHotelById("66d4ab5d86e09641c2f11323")

// Problem 2

async function deleteHotelByPhoneNumber(hotelPhoneNumber){
  try{
    const deletedHotel = await Hotel.findOneAndDelete({phoneNumber: hotelPhoneNumber})
    console.log(deletedHotel)
  }catch{
    console.log("Error in deleting hotel", error)
  }
}

deleteHotelByPhoneNumber("+1234555890")