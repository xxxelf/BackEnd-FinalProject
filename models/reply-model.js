const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const threadSchema = new Schema({
  id: Number,
  
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
  timestamps: {
    createdAt: "created_at",
  }
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;