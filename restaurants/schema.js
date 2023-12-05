import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    restaurantName: { type: String, required: true, unique: false },
    restaurantUrl: { type: String, required: true, unique: true},
    restaurantImageUrl: String,
    rating: String,
    price: String,
    location: String,
    phone: String,
    bookmarkedUsers: Array
  },
  { collection: "restaurants" });
  
export default restaurantSchema;