const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const Therapist = require('../models/Therapist');
const router = express.Router();

// Get all therapists
router.get('/', async (req, res) => {
    try {
        const therapists = await Therapist.find();
        res.json(therapists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific therapist
router.get('/:id', async (req, res) => {
    try {
        // Check if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const therapist = await Therapist.findById(req.params.id);
        if (!therapist) {
            return res.status(404).json({ message: 'Therapist not found' });
        }
        res.json(therapist);
    } catch (err) {
        console.error(`Error fetching therapist with ID ${req.params.id}:`, err);
        res.status(500).json({ message: 'Server error: Unable to fetch therapist.' });
    }
});

// Create a therapist
router.post('/', async (req, res) => {
    const therapist = new Therapist({
        name: req.body.name,
        photo: req.body.photo,
        description: req.body.description,
        specialization: req.body.specialization,
        email: req.body.email,
        bookingLink: req.body.bookingLink // Ensure bookingLink is saved
    });
    try {
        const newTherapist = await therapist.save();
        res.status(201).json(newTherapist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
