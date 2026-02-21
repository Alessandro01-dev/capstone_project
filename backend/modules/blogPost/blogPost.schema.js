const mongoose = require("mongoose")

const BlogPost = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  readTime: {
    value: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    default: []
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
    default: []
  }],
  content: {
    type: String,
    required: true
  }
}, { timestamps: true, strict: true })

module.exports = mongoose.model("blogPost", BlogPost, "blogPosts")