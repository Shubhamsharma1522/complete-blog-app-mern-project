import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  picture: {
    type: Object,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  createdDate: {
    type: Date,
  },
});

const post = mongoose.model("post", postSchema);

export default post;
