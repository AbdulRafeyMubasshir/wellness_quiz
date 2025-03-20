const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },  // e.g., "Energy", "Immunity", "Stress"
  tags: [String],  // e.g., ["vegan", "protein", "multivitamin"]
  imageUrl: { type: String }  // Optional, for product images
});

module.exports = mongoose.model('Product', productSchema);
