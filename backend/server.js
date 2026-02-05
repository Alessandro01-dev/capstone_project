const express = require("express")
const PORT = 4545
const cors = require("cors")
const startServer = require("./config/db")

// middleware imports

// routes imports

const app = express()

// global middlewares
app.use(cors())
app.use(express.json())

// middlewares

// passport middlewares

// routes

// error handler

startServer(PORT, app)