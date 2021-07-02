// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price:{
    type: Number
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  discount:{
    type: String
  },
  price:{
    type: String
  },
  count:{
    type: Number,
    required: true
  },
  
});

module.exports = Book = mongoose.model('book', BookSchema);
