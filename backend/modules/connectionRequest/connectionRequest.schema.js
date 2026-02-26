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
      required: true
    },
    language: {
      code: {
        type: String,
        required: true
      },
      level: {
        type: String,
        enum: ["A1", "A2", "B1", "B2", "C1", "C2"],
        required: true
      }
    },
    message: {
      type: String,
      max: 1000,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending"
    },
    readBySender: { type: Boolean, default: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model(
  "connectionRequest",
  ConnectionRequest,
  "connectionRequests"
)