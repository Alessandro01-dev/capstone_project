const UserSchema = require('./user.schema')

const getUserByEmail = async (email) => {
  return await UserSchema.findOne({ email })
}

const getUserById = async (userId) => {
  return await UserSchema.findById(userId)
}

const searchUsersNear = async ({ placeId, lng, lat, distance, city }) => {

  if (placeId && placeId !== 'undefined' && placeId !== 'null') {
    return await UserSchema.find({ "location.placeId": placeId }).select("-password");
  }

  if (lat && lng && lat !== 'undefined' && lng !== 'undefined') {
    const longitude = parseFloat(lng);
    const latitude = parseFloat(lat);

    if (isNaN(longitude) || isNaN(latitude)) return [];

    return await UserSchema.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: [longitude, latitude] },
          distanceField: "distanceKm",
          maxDistance: parseInt(distance) * 1000,
          spherical: true,
          key: "location.geo",
          distanceMultiplier: 0.001
        }
      },
      { $project: { password: 0, __v: 0 } }
    ]);
  }

  if (city && city !== 'undefined' && city !== 'null') {
    return await UserSchema.find({
      "location.city": { $regex: new RegExp(city, "i") }
    }).select("-password -__v");
  }
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