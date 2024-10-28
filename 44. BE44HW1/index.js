const express = require("express");
const app = express();

require("dotenv").config();
const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurants.models");

initializeDatabase();

app.use(express.json());

async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const saveRestaurant = await restaurant.save();
    return saveRestaurant
  } catch (error) {
    throw error;
  }
}

app.post('/restaurants', async (req, res) => {
    try{
        const savedRestaurant = await createRestaurant(req.body)
        res.status(201).json({message: "Restaurant added successfully", restaurant: savedRestaurant})
    }catch(error){
        res.status(500).json({error: "Failed to add restaurants."})
    }
})

// read all restaurants from the database
async function readAllRestaurants() {
  try {
    const allRestaurants = await Restaurant.find();
    return allRestaurants;
  } catch (error) {
    throw error;
  }
}

app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await readAllRestaurants();
    if (restaurants.length != 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "No restaurants found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants." });
  }
});

// read restaurant by its name
async function readRestaurantByName(restaurantName) {
  try {
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    return restaurant;
  } catch (error) {
    throw error;
  }
}

app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const restaurant = await readRestaurantByName(req.params.restaurantName);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

// read restaurant by phone number
async function readRestaurantByPhoneNumber(restaurantPhoneNumber) {
  try {
    const restaurant = await Restaurant.findOne({
      phoneNumber: restaurantPhoneNumber,
    });
    return restaurant;
  } catch (error) {
    console.log(error);
  }
}

app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const restaurant = await readRestaurantByPhoneNumber(
      req.params.phoneNumber
    );
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

// read all restaurants by cuisine
async function readAllRestaurantsByCuisine(cuisineName) {
  try {
    const restaurant = await Restaurant.find({ cuisine: cuisineName });
    return restaurant;
  } catch (error) {
    throw error;
  }
}

app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const restaurant = await readAllRestaurantsByCuisine(
      req.params.cuisineName
    );
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant." });
  }
});

// read restaurants by location
async function readAllRestaurantsByLocation(locationName) {
  try {
    const restaurant = await Restaurant.find({ location: locationName });
    return restaurant;
  } catch (error) {
    throw error;
  }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const restaurant = await readAllRestaurantsByLocation(
      req.params.restaurantLocation
    );
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant." });
  }
});

async function deleteRestaurant(restaurantId){
    try{
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId)
        return deletedRestaurant
    }catch(error){
        console.log(error)
    }
}

app.delete('/restaurants/:restaurantId', async (req, res) => {
    try{
        const deletedRestaurant = await deleteRestaurant(req.params.restaurantId)
        if(deletedRestaurant){
            res.status(200).json({message: 'Restaurant deleted successfully.'})
        } else {
            res.status(404).json({error: 'Restaurant not found.'})
        }
    }catch (error){
        res.status(500).json({error: 'Failed to delete a restaurant.'})
    }   
})

async function updateRestaurant(restaurantId, dataToUpdate){
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, dataToUpdate, { new: true })
    return updatedRestaurant
  }catch(error){
    console.log("Error in updating restaurant data", error)
  }
}

app.post('/restaurants/:restaurantId', async (req, res) => {
  try{
    const updatedRestaurant = await updateRestaurant(req.params.restaurantId, req.body)
    if(updatedRestaurant){
      res.status(200).json({message: 'Restaurant updated successfully', updatedRestaurant: updatedRestaurant})
    } else {
      res.status(404).json({error: 'Restaurant not found.'})
    }
  }catch(error){
    res.status(500).json({error: 'Failed to update restaurant.'})
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});