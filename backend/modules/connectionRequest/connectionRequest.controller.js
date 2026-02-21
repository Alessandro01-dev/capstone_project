const connectionRequestService = require('./connectionRequest.service')

const createConnectionRequest = async (req, res, next) => {
  const { body } = req
  const userId = req.user.id
  try {
    const newRequest = await connectionRequestService.createConnectionRequest(userId, body)
    res.status(201).send({
      statusCode: 201,
      message: 'Connection request sent successfully',
      newRequest
    })
  } catch (error) {
    next(error)
  }
}

const getSentRequests = async (req, res, next) => {
  const userId = req.user.id
  try {
    const requests = await connectionRequestService.getSentRequests(userId)
    res.status(200).send({
      statusCode: 200,
      requests
    })
  } catch (error) {
    next(error)
  }
}

const getReceivedRequests = async (req, res, next) => {
  const userId = req.user.id
  try {
    const requests = await connectionRequestService.getReceivedRequests(userId)
    res.status(200).send({
      statusCode: 200,
      requests
    })
  } catch (error) {
    next(error)
  }
}

const acceptRequest = async (req, res, next) => {
  const { requestId } = req.params
  const userId = req.user.id
  try {
    const acceptedRequest = await connectionRequestService.acceptRequest(requestId, userId)
    res.status(200).send({
      statusCode: 200,
      message: 'Connection request accepted',
      acceptedRequest
    })
  } catch (error) {
    next(error)
  }
}

const rejectRequest = async (req, res, next) => {
  const { requestId } = req.params
  const userId = req.user.id
  try {
    const rejectedRequest = await connectionRequestService.rejectRequest(requestId, userId)
    res.status(200).send({
      statusCode: 200,
      message: 'Connection request rejected',
      rejectedRequest
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createConnectionRequest,
  getSentRequests,
  getReceivedRequests,
  acceptRequest,
  rejectRequest
}