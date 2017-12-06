const Board = require("../models/board-model").Board;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/board", {useMOngoClient: true});

const boards = [
  {
    name: "Random",
    currentNumber: 0,
    path: "b"
  },
  {
    name: "Politics",
    currentNumber: 0,
    path: "pol"
  },
  {
    name: "Sports",
    currentNumber: 0,
    path: "sp"
  },
  {
    name: "Music",
    currentNumber: 0,
    path: "mu"
  },
  {
    name: "Video Games",
    currentNumber: 0,
    path: "v"
  },
  
];

Board.create(boards, (err, boards) => {
  if (err) { throw (err); }
  console.log("Success", boards);
  mongoose.connection.close();
})
;