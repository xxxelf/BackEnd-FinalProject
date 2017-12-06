const Board = require("../models/board-model").Board;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/board", {useMOngoClient: true});

const boards = [
  {
    name: "Random",
    currentNumber: 5,
    boardPath: "b"
  },
  {
    name: "Politics",
    currentNumber: 0,
    boardPath: "pol"
  },
  {
    name: "Sports",
    currentNumber: 0,
    boardPath: "sp"
  },
  {
    name: "Music",
    currentNumber: 5,
    boardPath: "mu"
  },
  {
    name: "Video Games",
    currentNumber: 0,
    boardPath: "v"
  },
  
];

// Delete all the boards
Board.remove({}).then(() => {
    
  // create all the boards again
  Board.create(boards, (err, boards) => {
    if (err) { throw (err); }
    console.log("Success", boards);
    mongoose.connection.close();
  });

});