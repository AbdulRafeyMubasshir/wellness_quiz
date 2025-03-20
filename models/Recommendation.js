const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  option_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Option', required: true },
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
