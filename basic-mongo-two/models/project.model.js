const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  developer: { type: String, required: true },
  project: { type: String, required: true },
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
