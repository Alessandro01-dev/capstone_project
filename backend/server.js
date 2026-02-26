const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const PORT = 4545
const cors = require("cors")
const startServer = require("./config/db")

// middleware imports
const errorHandler = require("./middlewares/errorHandler/errorHandler")
const verifyToken = require('./middlewares/auth/verifyToken')

// routes imports
const userRoute = require('./modules/user/user.route')
const tutorRoute = require('./modules/tutor/tutor.route')
const blogPostRoute = require('./modules/blogPost/blogPost.route')
const commentRoute = require('./modules/comment/comment.route')
const authRoute = require('./modules/auth/auth.route')
const connectionRequestRoute = require('./modules/connectionRequest/connectionRequest.router')

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});
app.set('socketio', io);

io.on('connection', (socket) => {
  console.log('Un utente si è connesso via Socket:', socket.id);

  socket.on('join_room', (userId) => {
    socket.join(userId);
    console.log(`SERVER: Utente ${userId} è entrato nella stanza`);
    console.log(`Utente ${userId} è entrato nella sua stanza notifiche`);
  });

  socket.on('disconnect', () => {
    console.log('Utente disconnesso');
  });
});

// global middlewares
app.use(cors())
app.use(express.json())

// middlewares
app.use(verifyToken)

// passport middlewares

// routes
app.use('/', userRoute)
app.use('/', tutorRoute)
app.use('/', blogPostRoute)
app.use('/', commentRoute)
app.use('/', authRoute)
app.use('/', connectionRequestRoute)

// error handler
app.use(errorHandler)

startServer(PORT, server)