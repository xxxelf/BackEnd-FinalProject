const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const replySchema = new Schema({
  boardId: {
    type: ObjectId,
    ref: 'Board'
  },
  threadId: {
    type: ObjectId,
    ref: 'Thread'
  },
  postNo: Number,
  content: String,
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;