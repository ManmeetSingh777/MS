const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    specialization: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bookingLink: { type: String, required: true } // Add this line
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;
