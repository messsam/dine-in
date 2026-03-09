import { Reservation } from '../models/reservation.model.js';

export const reservationRepository = {
    create: async (reservationData) => {
        const reservation = new Reservation(reservationData);
        return await reservation.save();
    },
    find: async (id) => {
        return await Reservation.findById(id);
    },
    update: async (id, updateData) => {
        return await Reservation.findByIdAndUpdate(id, updateData, { new: true });
    },
    delete: async (id) => {
        return await Reservation.findByIdAndDelete(id);
    }
}