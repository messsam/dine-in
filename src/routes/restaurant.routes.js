import { Router } from 'express';
import { restaurantController } from '../controllers/restaurant.controller.js';

const router = Router();

router.post('/', restaurantController.createRestaurant);
router.get('/', restaurantController.findAllRestaurants);
router.get('/:id', restaurantController.findRestaurant);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

export default router;