const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  name: String,
  currentNumber: {
    type: Number,
    default: 0
  },
  boardPath: String
});

const Board = mongoose.model('Board', boardSchema);

module.exports = {
  Board
}