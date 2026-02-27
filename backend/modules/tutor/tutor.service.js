const UserSchema = require('../user/user.schema')
const TutorSchema = require('./tutor.schema')
const UserNotFoundException = require('../../exceptions/user/UserNotFoundException')

const getTutors = async (page, pageSize, placeId, languageCode) => {
  let query = {};

  if (placeId) {
    const usersInLocation = await UserSchema.find({
      "location.placeId": placeId
    }).select('_id');

    const userIds = usersInLocation.map(user => user._id);
    query.user = { $in: userIds };
  }

  if (languageCode) {
    query.$or = [
      { "languagesTaught.natives.code": languageCode },
      { "languagesTaught.others.code": languageCode }
    ];
  }


  const tutors = await TutorSchema.find(query)
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .populate('user', 'name surname avatar nationality location')
  const totalTutors = await TutorSchema.countDocuments(query)
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
    .populate('user', 'name surname avatar nationality bio languages')
}

const createTutor = async (body) => {
  const userId = body.user
  if (!userId) throw new Error('User ID is required');
  const user = await UserSchema.findById(userId)
  if (!user) {
    throw new UserNotFoundException()
  }

  if (user.isTutor) throw new Error('User is already a tutor');

  const existingTutor = await TutorSchema.findOne({ user: userId })

  if (existingTutor) {
    user.isTutor = true;
    await user.save();
    throw new Error('User record already exists');
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