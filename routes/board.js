var express = require('express');
var router = express.Router();

var Board = require("../models/board-model").Board;

/* GET ALL BOARDS. */
router.get('/', function(req, res, next) {
    Board.find({}, (err, result) => {
        if (err) {
          next(err);
          return;
        }
        res.status(200).json(result);
      });
    
});

/* GET ONE BOARD. */
router.get('/:boardPath', function(req, res, next) {
    res.status(200).json({ board: "show one board" });
});

/* GET ALL THREADS OF ONE BOARD. */
router.get('/:boardPath/thread', function(req, res, next) {
    res.status(200).json({ threads: "list all threads" });
});

/* GET ONE THREAD. */
router.get('/:boardPath/thread/:threadNo', function(req, res, next) {
    res.status(200).json({ threads: "show one thread" });
});

/* GET ALL REPLIES. */
router.get('/:boardPath/thread/:threadNo/reply', function(req, res, next) {
    res.status(200).json({ threads: "list all replies" });
});

/* GET ONE REPLY. */
router.get('/:boardPath/thread/:threadNo/reply/:replyNo', function(req, res, next) {
    res.status(200).json({ threads: "show one reply" });
});

/* POST ONE THREAD. */
router.post('/:boardPath/thread/', function(req, res, next) {
    res.status(200).json({ message: "success! Saved thread" });
});

/* POST ONE REPLY. */
router.post('/:boardPath/thread/:threadNo/reply', function(req, res, next) {
    res.status(200).json({ message: "success! Saved reply" });
});

module.exports = router;