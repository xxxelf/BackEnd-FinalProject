const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/board", {useMOngoClient: true});

const Thread = require("../models/thread-model").Thread;
const Board = require("../models/board-model").Board;


const threads = [
  {
    boardPath: "mu",
    postNo:1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci sit amet orci pellentesque feugiat. Aliquam ornare, orci at tempor pharetra, nibh neque pulvinar turpis, non fermentum tortor lorem vel nisi. Sed faucibus ullamcorper dolor ut pharetra. Donec rutrum purus risus, sit amet lobortis nunc laoreet id."
  },  {
    boardPath: "mu",
    postNo:2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci sit amet orci pellentesque feugiat. Aliquam ornare, orci at tempor pharetra, nibh neque pulvinar turpis, non fermentum tortor lorem vel nisi. Sed faucibus ullamcorper dolor ut pharetra. Donec rutrum purus risus, sit amet lobortis nunc laoreet id."
  },  {
    boardPath: "mu",
    postNo:3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci sit amet orci pellentesque feugiat. Aliquam ornare, orci at tempor pharetra, nibh neque pulvinar turpis, non fermentum tortor lorem vel nisi. Sed faucibus ullamcorper dolor ut pharetra. Donec rutrum purus risus, sit amet lobortis nunc laoreet id."
  },  {
    boardPath: "mu",
    postNo:4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci sit amet orci pellentesque feugiat. Aliquam ornare, orci at tempor pharetra, nibh neque pulvinar turpis, non fermentum tortor lorem vel nisi. Sed faucibus ullamcorper dolor ut pharetra. Donec rutrum purus risus, sit amet lobortis nunc laoreet id."
  },  {
    boardPath: "mu",
    postNo:5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci sit amet orci pellentesque feugiat. Aliquam ornare, orci at tempor pharetra, nibh neque pulvinar turpis, non fermentum tortor lorem vel nisi. Sed faucibus ullamcorper dolor ut pharetra. Donec rutrum purus risus, sit amet lobortis nunc laoreet id."
  },
];

// maps boardPath to the actual board._id seeded by board-seed.js
var promises = [];
threads.forEach((thread, index) => {
  const promise = Board.findOne({boardPath: thread.boardPath}).then(board => {
    if (!board) {
      return Promise.reject("board not found for thread #" + index);
    }
    thread.boardId = board._id;
    delete thread.boardPath;
  });
  promises.push(promise);
});

// deletes all the threads
Thread.remove({}).then(() => {

  // waits for all the boardPath=>board._id map to finish
  Promise.all(promises).then(() => {
    // creates all the threads
    Thread.create(threads, (err, threads) => {
      if (err) { throw (err); }
      console.log("Success", threads);
      mongoose.connection.close();
    });
  })
  .catch(err => {
    console.log("NOPS!", err);
    mongoose.connection.close();
  });  

})
