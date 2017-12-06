var express = require('express');
var router = express.Router();
/*Import Models*/
var Board = require("../models/board-model").Board;
var Thread = require("../models/thread-model").Thread;
var Reply = require("../models/reply-model");


/* GET ALL BOARDS. */
router.get('/', function(req, res, next) {
    Board.find({}, (err, boards) => {
        if (err) {
          next(err);
          return;
        }
        res.status(200).json(boards);
      });
    
});

/* GET ONE BOARD. */
router.get('/:boardPath', function(req, res, next) {
    const boardPath = req.params.boardPath;
    console.log(boardPath);
    Board.findOne({boardPath: boardPath}, (err, board) => {
        if (err) {
            next(err);
            return;
        }
        if (!board) {
            res.status(404).json({error: 'board not found'});    
            return;
        }
        res.status(200).json(board);
      });
});

/* GET ALL THREADS OF ONE BOARD. */
router.get('/:boardPath/thread', function(req, res, next) { 
    const boardPath = req.params.boardPath;
    Board.findOne({boardPath : boardPath}, (err, board) => {
        if (err) {
            next(err);
            return;
        }
        if (!board) {
            res.status(404).json({error: 'board not found'});    
            return;
        }
        Thread.find({boardId : board._id}, (err, threads)=>{
            if (err) {
                next(err);
                return;
            } 
            res.status(200).json(threads);
        });
    });
});

/* GET ONE THREAD. */
router.get('/:boardPath/thread/:postNo', function(req, res, next) {
    const postNo = req.params.postNo;
    const boardPath = req.params.boardPath;
    Board.findOne({boardPath : boardPath}, (err, board) => {
        if (err) {
          next(err);
          return;
        }
        if (!board) {
            res.status(404).json({error: 'board not found'});    
            return;
        }
        Thread.findOne({boardId : board._id, postNo: postNo}, (err, thread)=>{
            if (err) {
                next(err);
                return;
            }
            if (!thread) {
                res.status(404).json({error: 'thread not found'});    
                return;
            }
            res.status(200).json(thread);
        });
    });
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