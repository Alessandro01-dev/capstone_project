const UserSchema = require('../user/user.schema')
const TutorSchema = require('./tutor.schema')

const getTutors = async (page, pageSize) => {
  const tutors = await TutorSchema.find()
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .populate('user', 'name surname avatar nationality')
  const totalTutors = await TutorSchema.countDocuments()
  const totalPages = Math.ceil(totalTutors / pageSize)
  return {
    page,
    pageSize,
    totalTutors,
    totalPages,
    tutors
  }
}

const getTutorById = async (tutorId) => {
  return await TutorSchema.findById(tutorId)
    .populate('user', 'name surname avatar nationality')
}

const createTutor = async (body) => {
  const userId = body.user
  const user = await UserSchema.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }
  const existingTutor = await TutorSchema.findOne({ user: userId })
  if (existingTutor) {
    throw new Error('User is already a tutor')
  }
  const newTutor = await TutorSchema.create(body)
  user.isTutor = true
  await user.save()
  return await newTutor.populate('user', 'name surname avatar')
}

const updateTutor = async (tutorId, body) => {
  const options = { new: true }
  return await TutorSchema.findByIdAndUpdate(
    tutorId,
    body,
    options
  ).populate('user', 'name surname avatar')
}

const deleteTutor = async (tutorId) => {
  const tutor = await TutorSchema.findById(tutorId)
  if (!tutor) {
    throw new Error('Tutor not found')
  }
  await UserSchema.findByIdAndUpdate(tutor.user, { isTutor: false })
  return await tutor.deleteOne()
}

module.exports = {
  getTutors,
  getTutorById,
  createTutor,
  updateTutor,
  deleteTutor
}