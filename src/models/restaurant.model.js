import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
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
    location: {
        lat: Number,
        lng: Number,
        address: String
    },
    rating: {
        type: Number,
        default: 0,
    },
    tables: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
    }],
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
});

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);