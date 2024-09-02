const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { authMiddleware, isAdmin } = require('../middleware/admin');

// Get all appointments
router.get('/', authMiddleware, isAdmin, async (req, res) => {
  try {
    // Remove populate if not needed
    const appointments = await Appointment.find(); 
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
});

module.exports = router;
