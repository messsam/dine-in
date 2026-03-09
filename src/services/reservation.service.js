import { reservationRepository } from "../repositories/reservation.repository.js";

export const reservationService = {
    createReservation: async (reservationData) => {
        return await reservationRepository.create(reservationData);
    },
    findReservation: async (id) => {
        return await reservationRepository.find(id);
    },
    updateReservation: async (id, updateData) => {
        return await reservationRepository.update(id, updateData);
    },
    deleteReservation: async (id) => {
        return await reservationRepository.delete(id);
    }
}