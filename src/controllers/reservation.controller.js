import { reservationService } from '../services/reservation.service.js';

export const reservationController = {
    createReservation: async (req, res) => {
        try {
            const reservation = await reservationService.createReservation(req.body);
            res.status(201).json(reservation);
        } catch (error) {
            res.status(400).json({ error: "Invalid reservation data", details: error.message });
        }
    },
    findReservation: async (req, res) => {
        try {
            const reservation = await reservationService.findReservation(req.params.id);
            if (!reservation) return res.status(404).json({ error: "Reservation not found" });
            res.json(reservation);
        } catch (error) {
            res.status(404).json({ error: "Reservation not found", details: error.message });
        }
    },
    updateReservation: async (req, res) => {
        try {
            const reservation = await reservationService.updateReservation(req.params.id, req.body);
            if (!reservation) return res.status(404).json({ error: "Reservation not found" });
            res.json(reservation);
        } catch (error) {
            res.status(400).json({ error: "Invalid reservation data", details: error.message });
        }
    },
    deleteReservation: async (req, res) => {
        try {
            const reservation = await reservationService.deleteReservation(req.params.id);
            if (!reservation) return res.status(404).json({ error: "Reservation not found" });
            res.json(reservation);
        } catch (error) {
            res.status(404).json({ error: "Reservation not found", details: error.message });
        }
    }
};
