const mongoose = require("mongoose")

const Tutor = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true
    },
    bio: {
      type: String,
      max: 1000,
    },
    languagesTaught: {
      natives: [
        {
          code: { type: String, required: true }
        }
      ],
      others: [
        {
          code: { type: String, required: true },
          level: {
            type: String,
            enum: ["B1", "B2", "C1", "C2"],
            required: true
          }
        }
      ]
    },
    experience: {
      type: Number
    },
    certifications: [
      {
        name: {
          type: String,
          required: true
        },
        institution: {
          type: String,
          required: true
        },
        year: {
          type: Number,
          required: true
        },
        file: {
          type: String,
          required: true
        },
        isVerified: {
          type: Boolean,
          default: false
        }
      }
    ],
    hourlyRate: {
      type: Number
    },
    availability: {
      type: String
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true, strict: true },
)

module.exports = mongoose.model("tutor", Tutor, "tutors");