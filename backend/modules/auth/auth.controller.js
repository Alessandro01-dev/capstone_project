const authService = require('./auth.service')
const userService = require('../user/user.service')
const UserNotFoundException = require('../../exceptions/user/UserNotFoundException')

const login = async (req, res, next) => {
  const { body } = req
  try {
    const token = await authService.login(body)

    res.status(200).send({
      statusCode: 200,
      message: "Login successfully",
      token
    })
  } catch (e) {
    next(e)
  }
}

const loggedUser = async (req, res, next) => {
  const { id } = req.user
  try {
    const user = await userService.getUserById(id)
    if (!user) {
      throw new UserNotFoundException()
    }
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  login,
  loggedUser
}