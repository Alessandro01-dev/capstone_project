const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    avatar: {
      type: String,
      default: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3485.jpg?w=360"
    },
    bio: {
      type: String
    },
    interests: {
      type: [String],
      default: []
    },
    blogPosts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogPost",
      default: []
    }],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
      default: []
    }],
    isTutor: {
      type: Boolean,
      default: false
    },
    languages: {
      native: [
        {
          code: { type: String, required: false }
        }
      ],
      spoken: [
        {
          code: { type: String, required: false },
          level: {
            type: String,
            enum: ["A1", "A2", "B1", "B2", "C1", "C2"],
            required: false
          }
        }
      ],
      learning: [
        {
          code: String,
          level: {
            type: String,
            enum: ["A1", "A2", "B1", "B2", "C1"]
          }
        }
      ]
    },
    nationality: {
      name: {
        type: String
      },
      code: {
        type: String
      }
    },
    location: {
      address: {
        type: String,
        required: false
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String
      },
      placeId: {
        type: String,
        required: false
      },
      geo: {
        type: {
          type: String,
          enum: ["Point"],
          required: false
        },
        coordinates: {
          type: [Number],
          required: false
        }
      }
    }
  },
  { timestamps: true, strict: true },
);

User.pre("save", async function () {
  if (!this.isModified("password")) {
    return
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error
  }
})

User.pre("findOneAndUpdate", async function () {
  const update = this.getUpdate()
  if (!update) {
    return;
  }
  const plainPassword = update.password ?? update.$set.password;
  if (!plainPassword) return;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(plainPassword, salt);

  if (update.password) {
    update.password = hashed;
  }

  if (update.$set.password) {
    update.$set.password = hashed;
  }
  this.setUpdate(update);
})

User.index({ "location.geo": "2dsphere" })

module.exports = mongoose.model("user", User, "users");
