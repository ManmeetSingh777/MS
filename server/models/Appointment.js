const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patient: {
    type: String,
    required: true
  },
  appointmentTime: {
    type: Date,
    required: true
  },
  details: {
    type: Object,
    required: true
  },
  therapist: { // Add this if you have a reference to the therapist
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Therapist',
    required: true
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
