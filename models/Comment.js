const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  authId: {
    type: String,
    default: ""
  },
  body: {
    type: String,
    required: true
  },
  authName: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
