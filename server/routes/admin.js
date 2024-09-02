const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');
const Appointment = require('../models/Appointment');
const { authMiddleware, isAdmin } = require('../middleware/admin');

// Get all FAQs
router.get('/faqs', authMiddleware, isAdmin, async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs', error });
  }
});

// Add a new FAQ
router.post('/faqs', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFaq = new FAQ({ question, answer });
    await newFaq.save();
    res.json({ message: 'FAQ added' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding FAQ', error });
  }
});

// Update an FAQ
router.put('/faqs/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    await FAQ.findByIdAndUpdate(id, { question, answer });
    res.json({ message: 'FAQ updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating FAQ', error });
  }
});

// Delete an FAQ
router.delete('/faqs/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await FAQ.findByIdAndDelete(id);
    res.json({ message: 'FAQ deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting FAQ', error });
  }
});

// Get all appointments
router.get('/appointments', authMiddleware, isAdmin, async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('patient', 'name email');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
});

module.exports = router;
