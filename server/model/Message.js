const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  userNmae: {
    type: String,
  },
  type: {
    type: String,
  },
  content: {
    type: String,
  },
  state: {
    type: Boolean,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Message", Schema);
