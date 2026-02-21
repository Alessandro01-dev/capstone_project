const express = require('express')
const router = express.Router()
const blogPostController = require('./blogPost.controller')

router.get('/blogPosts', blogPostController.getBlogPosts)
router.get('/search/blogPosts', blogPostController.getBlogPostsByTitle)
router.get('/blogPosts/:blogPostId', blogPostController.getBlogPostById)

router.post('/blogPosts', blogPostController.createBlogPost)
router.patch('/blogPosts/:blogPostsId', blogPostController.updateBlogPost)
router.delete('/blogPosts/:blogPostId', blogPostController.deleteBlogPost)

module.exports = router