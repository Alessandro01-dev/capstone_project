const express = require('express')
const router = express.Router()
const userController = require('./user.controller')
const { cloudUpload } = require('../../middlewares/upload')

router.get('/users/near', userController.getUsersNear)
router.get('/users/:userId', userController.getUserById);
router.post('/users', userController.createUser)

router.patch("/users/:userId/avatar", cloudUpload.single('avatar'), userController.uploadFileOnCloud)
router.patch('/users/:userId', userController.updateUser)
router.delete('/users/:userId', userController.deleteUser)

module.exports = router