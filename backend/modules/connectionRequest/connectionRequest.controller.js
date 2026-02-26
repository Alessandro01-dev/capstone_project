const connectionRequestService = require('./connectionRequest.service')

const createConnectionRequest = async (req, res, next) => {
  const { body } = req
  const userId = req.user.id
  try {
    const newRequest = await connectionRequestService.createConnectionRequest(userId, body)

    const io = req.app.get('socketio');
    io.to(newRequest.to._id.toString()).emit('notification_received', {
      type: 'NEW_REQUEST',
      request: newRequest
    });

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
  const { requestId } = req.params;
  const userId = req.user.id;
  try {
    const acceptedRequest = await connectionRequestService.acceptRequest(requestId, userId);
    const io = req.app.get('socketio');

    const senderRoom = acceptedRequest.from._id ? acceptedRequest.from._id.toString() : acceptedRequest.from.toString();
    const recipientRoom = userId.toString();

    io.to(senderRoom).emit('notification_received', {
      type: 'ACCEPTANCE',
      request: acceptedRequest
    });

    io.to(recipientRoom).emit('notification_received', {
      type: 'ACCEPTANCE',
      request: acceptedRequest
    });

    res.status(200).send({ statusCode: 200, message: 'Connection request accepted', acceptedRequest });
  } catch (error) {
    next(error);
  }
};

const rejectRequest = async (req, res, next) => {
  const { requestId } = req.params;
  const userId = req.user.id;
  try {
    const rejectedRequest = await connectionRequestService.rejectRequest(requestId, userId);
    const io = req.app.get('socketio');
    const senderRoom = rejectedRequest.from._id.toString();

    io.to(senderRoom).emit('notification_received', { type: 'REJECTION', request: rejectedRequest });
    io.to(userId.toString()).emit('notification_received', { type: 'REJECTION', request: rejectedRequest });

    res.status(200).send({ statusCode: 200, message: 'Connection request rejected', rejectedRequest });
  } catch (error) {
    next(error);
  }
};

const markAsRead = async (req, res, next) => {
  const { requestId } = req.params;
  const userId = req.user.id;
  try {
    await connectionRequestService.markAsRead(requestId, userId);
    res.status(200).send({ statusCode: 200, message: 'Notification marked as read' });
  } catch (error) {
    next(error);
  }
};


const deleteRequest = async (req, res, next) => {
  const { requestId } = req.params;
  const userId = req.user.id;
  try {
    const deletedRequest = await connectionRequestService.deleteRequest(requestId, userId);
    const io = req.app.get('socketio');
    const otherUserId = deletedRequest.from.toString() === userId ? deletedRequest.to : deletedRequest.from;

    io.to(otherUserId.toString()).emit('notification_received', { type: 'DELETION', requestId });

    io.to(userId.toString()).emit('notification_received', { type: 'DELETION', requestId });

    res.status(200).send({ statusCode: 200, message: 'Connection request deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createConnectionRequest,
  getSentRequests,
  getReceivedRequests,
  acceptRequest,
  rejectRequest,
  markAsRead,
  deleteRequest
}