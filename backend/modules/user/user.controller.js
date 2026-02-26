const UserNotFoundException = require('../../exceptions/user/UserNotFoundException');
const userService = require('./user.service')

const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);

    if (!user) {
      throw new UserNotFoundException()
    }
    res.status(200).send({
      statusCode: 200,
      user
    });
  } catch (error) {
    next(error);
  }
}

const getUsersNear = async (req, res, next) => {
  try {
    const { lat, lng, distance = 60, city, placeId } = req.query;

    console.log("--- NUOVA RICHIESTA ---");
    console.log("Dati RAW della Query:", req.query)

    const searchParams = {
      lat,
      lng,
      distance,
      city,
      placeId
    };

    console.log("Parametri inviati al Service:", searchParams);

    if (!city && !placeId && (!lat || !lng)) {
      return res.status(400).send({
        statusCode: 400,
        message: "Provide a city name, a place ID or enable location services."
      });
    }

    const users = await userService.searchUsersNear(searchParams);

    console.log("Utenti trovati nel DB:", users?.length || 0);

    res.status(200).send({
      statusCode: 200,
      count: users.length,
      users
    });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { body } = req
  try {
    const existingUserEmail = await userService.getUserByEmail(body.email)
    if (existingUserEmail) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Email already exists'
      })
    }
    const newUser = await userService.createUser(body)
    res.status(201).send({
      statusCode: 201,
      message: 'User created successfully',
      newUser
    })
  } catch (error) {
    next(error)
  }
}

const uploadFileOnCloud = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const imgUrl = req.file.path;

    const updatedUser = await userService.updateUser(userId, { avatar: imgUrl });

    res.status(200).json({
      message: 'Avatar uploaded and saved successfully',
      img: imgUrl,
      updatedUser
    });
  } catch (error) {
    next(error);
  }
}


const updateUser = async (req, res, next) => {
  const { body } = req
  const { userId } = req.params
  try {
    if (!userId) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Invalid params provided: user id not defined'
      })
    }

    const allowedUpdates = {
      name: body.name,
      surname: body.surname,
      bio: body.bio,
      interests: body.interests,
      languages: body.languages,
      location: body.location,
      nationality: body.nationality,
      avatar: body.avatar,
      meetings: body.meetings
    };

    if (allowedUpdates.location && allowedUpdates.location.geo) {
      const coords = allowedUpdates.location.geo.coordinates;

      if (!Array.isArray(coords) || coords.length !== 2) {

        allowedUpdates.location.geo = undefined;
      }
    }

    Object.keys(allowedUpdates).forEach(key =>
      allowedUpdates[key] === undefined && delete allowedUpdates[key]
    );

    const updatedUser = await userService.updateUser(userId, allowedUpdates)
    res.status(200).send({
      statusCode: 200,
      message: 'User updated successfully',
      updatedUser
    })
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  const { userId } = req.params
  try {
    if (!userId) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Invalid params provided: user id not defined'
      })
    }
    await userService.deleteUser(userId)
    res.status(200).send({
      statusCode: 200,
      message: 'User deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUsersNear,
  getUserById,
  createUser,
  uploadFileOnCloud,
  updateUser,
  deleteUser
}