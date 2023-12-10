import model from "./model.js";

export const findAllBookmarks = () => model.find();

export const createUserBookmarksRestaurant = (userId, restaurantId) =>
    model.create({ user: userId, restaurantId: restaurantId });
export const deleteUserBookmarksRestaurant = (userId, restaurantId) =>
    model.deleteOne({ user: userId, restaurantId: restaurantId });
export const findUsersThatBookmarkRestaurant = (restaurantId) =>
    model.find({ restaurantId: restaurantId }).populate("user");
export const findRestaurantsThatUserBookmarks = (userId) =>
    model.find({user: userId});
