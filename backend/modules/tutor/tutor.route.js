const express = require('express')
const router = express.Router()
const tutorController = require('./tutor.controller')

router.get('/tutors', tutorController.getTutors)
router.get('/tutors/:tutorId', tutorController.getTutorById)
router.post('/tutors', tutorController.createTutor)
router.patch('/tutors/:tutorId', tutorController.updateTutor)
router.delete('/tutors/:tutorId', tutorController.deleteTutor)

module.exports = router