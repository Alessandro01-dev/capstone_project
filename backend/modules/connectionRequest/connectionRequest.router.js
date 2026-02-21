const express = require('express')
const router = express.Router()
const connectionRequestController = require('./connectionRequest.controller')

router.post('/connections', connectionRequestController.createConnectionRequest)

router.get('/connections/sent', connectionRequestController.getSentRequests)
router.get('/connections/received', connectionRequestController.getReceivedRequests)

router.patch('/connections/:requestId/accept', connectionRequestController.acceptRequest)
router.patch('/connections/:requestId/reject', connectionRequestController.rejectRequest)

module.exports = router