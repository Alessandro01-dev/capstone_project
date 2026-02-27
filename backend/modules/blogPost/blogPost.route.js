const express = require('express')
const router = express.Router()
const blogPostController = require('./blogPost.controller')
const { cloudUpload } = require('../../middlewares/upload')

router.get('/blogPosts', blogPostController.getBlogPosts)
router.get('/blogPosts/:blogPostId', blogPostController.getBlogPostById)

router.post('/blogPosts/upload', cloudUpload.single('cover'), blogPostController.uploadFileOnCloud)
router.post('/blogPosts', blogPostController.createBlogPost)
router.patch('/blogPosts/:blogPostId', blogPostController.updateBlogPost)
router.delete('/blogPosts/:blogPostId', blogPostController.deleteBlogPost)

router.patch('/blogPosts/:blogPostId/like', blogPostController.toggleBlogPostLike)

router.get('/blogPosts/user/:userId', blogPostController.getBlogPostsByUserId);

module.exports = router