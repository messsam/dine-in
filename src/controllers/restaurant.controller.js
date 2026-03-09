import { restaurantService } from '../services/restaurant.service.js';

export const restaurantController = {
    createRestaurant: async (req, res) => {
        try {
            const restaurant = await restaurantService.createRestaurant(req.body);
            res.status(201).json(restaurant);
        } catch (error) {
            res.status(400).json({ error: "Invalid restaurant data", details: error.message });
        }
    },
    findRestaurant: async (req, res) => {
        try {
            const restaurant = await restaurantService.findRestaurant(req.params.id);
            if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
            res.json(restaurant);
        } catch (error) {
            res.status(404).json({ error: "Restaurant not found", details: error.message });
        }
    },
    findAllRestaurants: async (req, res) => {
        try {
            const restaurants = await restaurantService.findAllRestaurants();
            res.json(restaurants);
        } catch (error) {
            res.status(500).json({ error: "Failed to retrieve restaurants", details: error.message });
        }
    },
    updateRestaurant: async (req, res) => {
        try {
            const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
            if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
            res.json(restaurant);
        } catch (error) {
            res.status(400).json({ error: "Invalid restaurant data", details: error.message });
        }
    },
    deleteRestaurant: async (req, res) => {
        try {
            const restaurant = await restaurantService.deleteRestaurant(req.params.id);
            if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
            res.json(restaurant);
        } catch (error) {
            res.status(404).json({ error: "Restaurant not found", details: error.message });
        }
    }
};
