import model from "./model.js";
export const createRestaurant = (restaurant) => model.create(restaurant);
export const findRestaurantById = (restaurantId) => model.findById(restaurantId);
export const deleteRestaurant = (restaurant) => model.deleteOne(restaurant);
export const updateRestaurant = (restaurantId, restaurant) => model.updateOne({ _id: restaurantId }, { $set: restaurant });
