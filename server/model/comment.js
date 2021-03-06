const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  avtor: {
    type: String,
  },
  content: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  site: {
    type: String,
  },
  blogId: {
    type: String,
  },
  isauthorsComment: {
    type: Boolean,
    default: false,
  },
  istopComment: {
    type: Boolean,
    default: true,
  },
  replyId: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
  createTime: {
    type: String,
    default: () => {
      return new Date().toLocaleString();
    },
  },
  upDateTime: {
    type: String,
    default: () => {
      return new Date().toLocaleString();
    },
  },
});
module.exports = mongoose.model("Comment", Schema);
