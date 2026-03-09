import { Router } from 'express';
import { tableController } from '../controllers/table.controller.js';

const router = Router();

router.post('/', tableController.createTable);
router.get('/:id', tableController.findTable);
router.put('/:id', tableController.updateTable);
router.delete('/:id', tableController.deleteTable);

export default router;