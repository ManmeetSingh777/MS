const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FAQSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('FAQ', FAQSchema);
