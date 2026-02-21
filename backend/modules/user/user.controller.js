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
    const { lat, lng, distance = 50 } = req.query;

    if (!lat || !lng) {
      return res.status(400).send({
        statusCode: 400,
        message: "Latitude and longitude are required"
      });
    }

    const users = await userService.searchUsersNear(lng, lat, distance);

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
    console.log("ERRORE CREAZIONE UTENTE:", error);
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
    const updatedUser = await userService.updateUser(userId, body)
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