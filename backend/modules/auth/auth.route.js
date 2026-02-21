const express = require("express")
const router = express.Router()
const authController = require('./auth.controller')

router.get('/me', authController.loggedUser)

router.post("/login", authController.login)

module.exports = router