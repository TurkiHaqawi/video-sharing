const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    hashTags: {
      type: Array,
      required: false,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
var User = mongoose.model("Post", postSchema);

module.exports = User;
