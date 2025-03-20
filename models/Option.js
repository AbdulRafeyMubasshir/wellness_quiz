const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  text: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('Option', optionSchema);
