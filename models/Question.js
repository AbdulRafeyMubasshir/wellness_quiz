const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  category: { type: String, required: false },
});

module.exports = mongoose.model('Question', questionSchema);
