const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);
