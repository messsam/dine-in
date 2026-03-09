import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    Number: {
        type: Number,
        required: true,
        unique: true
    },
    Capacity: {
        type: Number,
        required: true
    },
    Restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
        unique: true
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
});

export const Table = mongoose.model('Table', tableSchema);