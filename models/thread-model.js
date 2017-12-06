const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const threadSchema = new Schema({
  boardId: {
    type: ObjectId,
    ref: 'Board'
  },
  postNo: Number,
  content: String,
  timestamps: {
      createdAt: "created_at",
  }
  

});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;