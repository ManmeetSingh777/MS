const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');
const { authMiddleware } = require('../middleware/admin');
const checkValidAppointment = require('../middleware/appointment');

router.get('/:appointmentId', authMiddleware, checkValidAppointment, async (req, res) => {
  try {
    const chats = await Chat.find({ appointment: req.params.appointmentId }).sort('timestamp');
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat messages', error });
  }
});

module.exports = router;
