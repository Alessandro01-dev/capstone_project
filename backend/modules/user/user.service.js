const UserSchema = require('./user.schema')

const getUserByEmail = async (email) => {
  return await UserSchema.findOne({ email })
}

const getUserById = async (userId) => {
  return await UserSchema.findById(userId)
}

const searchUsersNear = async (lng, lat, maxDistanceKm) => {
  return await UserSchema.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(lng), parseFloat(lat)]
        },
        distanceField: "distanceKm",
        maxDistance: parseInt(maxDistanceKm) * 1000,
        query: { isTutor: true },
        spherical: true,
        distanceMultiplier: 0.001
      }
    },
    {
      $project: {
        password: 0,
        __v: 0
      }
    }
  ]);
};

const createUser = async (body) => {
  const newUser = new UserSchema(body)
  return await newUser.save()
}

const updateUser = async (userId, body) => {
  const options = {
    new: true,
    runValidators: true
  }
  return await UserSchema.findByIdAndUpdate(userId, body, options)
}

const deleteUser = async (userId) => {
  return await UserSchema.findByIdAndDelete(userId)
}

module.exports = {
  getUserByEmail,
  getUserById,
  searchUsersNear,
  createUser,
  updateUser,
  deleteUser
}