const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  tagName: {
    type: String,
  },
  createTime: {
    type: String,
    default: () => {
      return new Date().toLocaleString();
    },
  },
});

module.exports = mongoose.model("Tag", Schema);
