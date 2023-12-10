import * as dao from "./dao.js";

function BookmarksRoutes(app) {
    const findAllBookmarks = async (req, res) => {};
    const createUserBookmarksRestaurant = async (req, res) => {
        const userId = req.params.userId;
        const restaurantId = req.params.restaurantId;
        const bookmarks = await dao.createUserBookmarksRestaurant(userId, restaurantId);
        res.json(bookmarks);
    };
    const deleteUserBookmarksRestaurant = async (req, res) => {

    };
    const findUsersThatBookmarkRestaurant = async (req, res) => {
        const restaurantId = req.params.restaurantId;
        const users = await dao.findUsersThatBookmarkRestaurant(restaurantId);
        res.json(users);
    };
    const findRestaurantsThatUserBookmarks = async (req, res) => {
        const userId = req.params.userId;
        const bookmarks = await dao.findRestaurantsThatUserBookmarks(userId);
        res.json(bookmarks);
    };

    app.get("/api/bookmarks", findAllBookmarks);
    app.post("/api/users/:userId/bookmarks/:restaurantId", createUserBookmarksRestaurant);
    app.delete("/api/users/:userId/bookmarks/:restaurantId", deleteUserBookmarksRestaurant);
    app.get("/api/bookmarks/:restaurantId/users", findUsersThatBookmarkRestaurant);
    app.get("/api/users/:userId/bookmarks", findRestaurantsThatUserBookmarks);
}

export default BookmarksRoutes;