const mongoose = require("mongoose")

const ConnectionRequest = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    type: {
      type: String,
      enum: ["practice", "tutoring"],
      default: "tutoring",
      required: true
    },
    language: {
      type: String,
      required: true
    },
    message: {
      type: String,
      max: 1000
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model(
  "connectionRequest",
  ConnectionRequest,
  "connectionRequests"
)