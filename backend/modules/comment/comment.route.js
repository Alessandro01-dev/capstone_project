const express = require('express')
const router = express.Router()
const commentController = require('./comment.controller')

router.get('/blogPosts/:id/comments', commentController.getBlogPostComments)
router.get('/blogPosts/:id/comments/:commentId', commentController.getBlogPostCommentById)

router.post('/blogPosts/:id/comments', commentController.createComment)
router.patch('/blogPosts/:id/comments/:commentId', commentController.updateComment)
router.delete('/blogPosts/:id/comments/:commentId', commentController.deleteComment)

module.exports = router