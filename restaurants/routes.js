import * as dao from "./dao.js";

function RestaurantRoutes(app) {
  // var currentSignedInUser=null;
  const createRestaurant = async (req, res) => {
    const restaurant = await dao.createRestaurant(req.body);
      res.json(restaurant);
  };

  const deleteRestaurant = async (req, res) => {
    const status = await dao.deleteRestaurant(req.params.restaurantId);
    res.json(status);
  };

  const findRestaurantById = async (req, res) => {
    const restaurant = await dao.findRestaurantById(req.params.restaurantId);
    res.json(restaurant);
  };
  
  const updateRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    const status = await dao.updateRestaurant(restaurantId, req.body);
    res.json(status);
  };

  app.post("/api/restaurants", createRestaurant);
  app.delete("/api/restaurants/:restaurantId", deleteRestaurant);
  app.get("/api/restaurants/:restaurantId", findRestaurantById);
  app.put("/api/restaurants/:restaurantId", updateRestaurant);
}

export default RestaurantRoutes;