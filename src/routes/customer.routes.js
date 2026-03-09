import { Router } from 'express';
import { customerController } from '../controllers/customer.controller.js';

const router = Router();

router.post('/', customerController.createCustomer);
router.get('/:id', customerController.findCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

export default router;