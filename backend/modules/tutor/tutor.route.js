const express = require('express')
const router = express.Router()
const tutorController = require('./tutor.controller')
const { cloudUpload } = require('../../middlewares/upload/index')

router.get('/tutors', tutorController.getTutors)
router.get('/tutors/:tutorId', tutorController.getTutorById)

router.patch("/tutors/:userId/certification", cloudUpload.single('certification'), tutorController.uploadFileOnCloud)
router.post('/tutors', tutorController.createTutor)
router.patch('/tutors/:tutorId', tutorController.updateTutor)
router.delete('/tutors/:tutorId', tutorController.deleteTutor)

module.exports = router