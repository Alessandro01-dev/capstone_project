const UserSchema = require('../user/user.schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserNotFoundException = require('../../exceptions/user/UserNotFoundException')
const EmailOrPasswordNotValidException = require('../../exceptions/auth/EmailOrPasswordNotValidException')

const login = async (body) => {
  const { email, password } = body
  const user = await UserSchema.findOne({ email })
  if (!user) {
    throw new UserNotFoundException()
  }
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new EmailOrPasswordNotValidException()
  }
  const token = jwt.sign({
    id: user._id,
    name: user.name,
    surname: user.surname,
    avatar: user.avatar
  }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })
  return token
}

module.exports = {
  login
}