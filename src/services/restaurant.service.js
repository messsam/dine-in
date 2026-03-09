import { restaurantRepository } from '../repositories/restaurant.repository.js';

export const restaurantService = {
    createRestaurant: async (restaurantData) => {
        return await restaurantRepository.create(restaurantData);
    },
    findRestaurant: async (id) => {
        return await restaurantRepository.find(id);
    },
    findAllRestaurants: async () => {
        return await restaurantRepository.findAll();
    },
    updateRestaurant: async (id, updateData) => {
        return await restaurantRepository.update(id, updateData);
    },
    deleteRestaurant: async (id) => {
        return await restaurantRepository.delete(id);
    }
}