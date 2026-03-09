import { Restaurant } from '../models/restaurant.model.js';

export const restaurantRepository = {
    create: async (restaurantData) => {
        const restaurant = new Restaurant(restaurantData);
        return await restaurant.save();
    },
    find: async (id) => {
        return await Restaurant.findById(id);
    },
    findAll: async () => {
        return await Restaurant.find();
    },
    update: async (id, updateData) => {
        return await Restaurant.findByIdAndUpdate(id, updateData, { new: true });
    },
    delete: async (id) => {
        return await Restaurant.findByIdAndDelete(id);
    }
};