import { Router } from 'express';
import { reservationController } from '../controllers/reservation.controller.js';

const router = Router();

router.post('/', reservationController.createReservation);
router.get('/:id', reservationController.findReservation);
router.put('/:id', reservationController.updateReservation);
router.delete('/:id', reservationController.deleteReservation);

export default router;