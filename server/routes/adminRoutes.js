const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  const adminEmails = ["admin1@example.com", "admin2@example.com"];
  const userEmail = req.user.email; // assuming user email is available in req.user
  if (adminEmails.includes(userEmail)) {
    next();
  } else {
    res.status(403).send('Access denied.');
  }
};

// Endpoint to get all FAQs
router.get('/faqs', async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
});

// Endpoint to add an FAQ
router.post('/faqs', isAdmin, async (req, res) => {
  const { question, answer } = req.body;
  const newFaq = new FAQ({ question, answer });
  await newFaq.save();
  res.send('FAQ added.');
});

// Endpoint to update an FAQ
router.put('/faqs/:id', isAdmin, async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  await FAQ.findByIdAndUpdate(id, { question, answer });
  res.send('FAQ updated.');
});

// Endpoint to delete an FAQ
router.delete('/faqs/:id', isAdmin, async (req, res) => {
  const { id } = req.params;
  await FAQ.findByIdAndDelete(id);
  res.send('FAQ deleted.');
});

module.exports = router;
