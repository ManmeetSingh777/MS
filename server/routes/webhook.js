const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

const verifyWebhookSecret = (req, res, next) => {
  const sentSecret = req.headers['x-webhook-secret'];
  if (sentSecret && sentSecret === WEBHOOK_SECRET) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Invalid webhook secret' });
  }
};

router.post('/calcom-webhook', verifyWebhookSecret, async (req, res) => {
  const { event, payload } = req.body;

  console.log('Webhook received:', { event, payload });

  if (event === 'booking.created') {
    const booking = payload;

    try {
      const newAppointment = new Appointment({
        patient: booking.attendee.email,
        appointmentTime: new Date(booking.start_time),
        details: booking
      });

      await newAppointment.save();
      console.log('Appointment saved:', newAppointment);
      res.status(200).json({ message: 'Appointment saved successfully' });
    } catch (error) {
      console.error('Error saving appointment:', error);
      res.status(500).json({ message: 'Error saving appointment', error });
    }
  } else {
    res.status(400).json({ message: 'Unhandled event type' });
  }
});

module.exports = router;
