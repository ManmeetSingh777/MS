const Appointment = require('../models/Appointment');

const checkValidAppointment = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { appointmentId } = req.params;

    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check if the user is either the patient or the therapist for this appointment
    if (appointment.patient !== userId && appointment.therapist !== userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  } catch (error) {
    console.error('Error checking appointment:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

module.exports = checkValidAppointment;
