import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    age: {
        type: Number,
        required: true
    },
    contactInfo: {
        email: {
            type: String,
            required: true,
            unique: true
        },
        number: {
            type: String,
            required: true,
        }
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
});

export const Customer = mongoose.model('Customer', customerSchema);