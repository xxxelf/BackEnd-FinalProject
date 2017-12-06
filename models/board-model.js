const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  name: String,
  currentNumber: Number,
  path: String
});

const Board = mongoose.model('Board', boardSchema);

module.exports = {
  Board
}