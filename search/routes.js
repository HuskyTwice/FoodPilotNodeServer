import axios from "axios";
import express from "express";

export const YELP_API = "https://api.yelp.com/v3/businesses";
export const YELP_API_KEY = "3sROVy-hI2liNmYmfGPGYd1M4UTKf5WSL6-1meh27jp3Hf95glvX_-4yDEls6sIsQj4tqjCIb0-zF-8TQS1_7RJUyYGl-2gjngWUKkkWzj1fSEldRwnYBYuGqpY-XHYx"

function SearchRoutes(app) {
    // use for general search
    const findRestaurants = async (req, res) => {
        const { food } = req.params;
        const { location } = req.params;
        
        try {
            console.log("Find Restaurants accessed.");
            const options = {
                method: 'GET',
                url: `${YELP_API}/search`,
                params: {location: location, term: food, sort_by: 'best_match', limit: '20'},
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${YELP_API_KEY}`
                }
            };
            const response = await axios.request(options);
            const restaurants = response.data.businesses;
            console.log(restaurants);
            res.json(restaurants);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // use Yelp restaurantId not ObjectId.
    const findRestaurantById = async (req, res) => {
        const { restaurantId } = req.params;

        try {
            const options = {
                method: 'GET',
                url: `${YELP_API}/${restaurantId}`,
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${YELP_API_KEY}`
                }
            };
            const response = await axios.request(options);
            const restaurantDetails = response.data;
            res.json(restaurantDetails);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    app.get('/api/restaurants/search/:food/:location', findRestaurants);
    app.get('/api/restaurant/:restaurantId', findRestaurantById);
}

export default SearchRoutes;