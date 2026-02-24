const ConnectionRequestSchema = require('./connectionRequest.schema')
const UserSchema = require('../user/user.schema')
const TutorSchema = require('../tutor/tutor.schema')

const createConnectionRequest = async (fromUserId, body) => {
  const { to, type, language, message } = body
  if (fromUserId.toString() === to) {
    throw new Error('You cannot send a connection request to yourself')
  }
  const targetUser = await UserSchema.findById(to)
  if (!targetUser) {
    throw new Error('Target user not found')
  }
  if (type === 'tutoring') {
    const tutor = await TutorSchema.findOne({ user: to })
    if (!tutor) {
      throw new Error('Target user is not a tutor')
    }
  }
  const existingRequest = await ConnectionRequestSchema.findOne({
    from: fromUserId,
    to,
    type,
    language,
    status: 'pending'
  })
  if (existingRequest) {
    throw new Error('Connection request already sent')
  }
  const newRequest = await ConnectionRequestSchema.create({
    from: fromUserId,
    to,
    type,
    language,
    message
  })
  return await newRequest.populate(
    'from to',
    'name surname avatar'
  )
}

const getSentRequests = async (userId) => {
  return await ConnectionRequestSchema.find({ from: userId })
    .populate('from to', 'name surname avatar nationality isTutor')
    .sort({ createdAt: -1 })
}

const getReceivedRequests = async (userId) => {
  return await ConnectionRequestSchema.find({ to: userId })
    .populate('from to', 'name surname avatar nationality isTutor')
    .sort({ createdAt: -1 })
}

const acceptRequest = async (requestId, userId) => {
  const request = await ConnectionRequestSchema.findById(requestId)
  if (!request) {
    throw new Error('Connection request not found')
  }
  if (request.to.toString() !== userId) {
    throw new Error('Not authorized to accept this request')
  }
  request.status = 'accepted'
  await request.save()
  return await request.populate('from to', 'name surname avatar')
}

const rejectRequest = async (requestId, userId) => {
  const request = await ConnectionRequestSchema.findById(requestId)
  if (!request) {
    throw new Error('Connection request not found')
  }
  if (request.to.toString() !== userId) {
    throw new Error('Not authorized to reject this request')
  }
  request.status = 'rejected'
  await request.save()
  return await request.populate('from to', 'name surname avatar')
}

module.exports = {
  createConnectionRequest,
  getSentRequests,
  getReceivedRequests,
  acceptRequest,
  rejectRequest
}