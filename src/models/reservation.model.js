import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
});

export const Reservation = mongoose.model('Reservation', reservationSchema);