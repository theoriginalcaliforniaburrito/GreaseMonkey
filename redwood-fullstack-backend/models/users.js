const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    vehicle: {
        type: String, 
        required: true
    },

    tireRotation: {
        type: Date,
        // required: true
    },

    oilChange: {
        type: Date,
        // required: true
    },

    wheelAlign: {
        type: Date,
        // required: true
    },

    brakePad: {
        type: Date,
        // required: true
    },

    coolant: {
        type: Date,
    },

    engine: {
        type: Date,
    },

    airFilter: {
        type: Date,
    },

    cabinFilter: {
        type: Date,
    },

    driveBelt: {
        type: Date,
    }
})

var User = mongoose.model('User', userSchema)

module.exports = User;