const blogPostService = require('./blogPost.service')

const getBlogPosts = async (req, res, next) => {
  const { page = 1, pageSize = 4 } = req.query
  try {
    const {
      totalBlogPosts,
      totalPages,
      blogPosts
    } = await blogPostService.getBlogPosts(page, pageSize)
    if (blogPosts.length === 0) {
      return res.status(404).send({
        statusCode: 404,
        message: "Blog posts not found"
      })
    }
    res.status(200).send({
      statusCode: 200,
      page: Number(page),
      pageSize: Number(pageSize),
      totalBlogPosts: Number(totalBlogPosts),
      totalPages: Number(totalPages),
      blogPosts
    })
  } catch (error) {
    next(error)
  }
}

const getBlogPostsByTitle = async (req, res) => {
  const { title, page = 1, pageSize = 4 } = req.query
  try {
    const {
      totalBlogPosts,
      totalPages,
      blogPosts
    } = await blogPostService.getBlogPostsByTitle(title, page, pageSize)
    if (blogPosts.length === 0) {
      return res.status(404).send({
        statusCode: 404,
        message: "Blog posts not found"
      })
    }
    res.status(200).send({
      statusCode: 200,
      page: Number(page),
      pageSize: Number(pageSize),
      totalBlogPosts: Number(totalBlogPosts),
      totalPages: Number(totalPages),
      blogPosts
    })
  } catch (error) {
    next(error)
  }
}

const getBlogPostById = async (req, res, next) => {
  const { blogPostId } = req.params
  try {
    if (!blogPostId) {
      return res.status(400).send({
        statusCode: 400,
        message: "Invalid param provided"
      })
    }
    const blogPost = await blogPostService.getBlogPostById(blogPostId)
    if (!blogPost) {
      return res.status(404).send({
        statusCode: 404,
        message: "Blog post not found"
      })
    }
    res.status(200).send({
      statusCode: 200,
      blogPost
    })
  } catch (error) {
    next(error)
  }
}

const createBlogPost = async (req, res, next) => {
  const { body } = req
  try {
    const newBlogPost = await blogPostService.createBlogPost(body)
    res.status(201).send({
      statusCode: 201,
      message: "Blog post created successfully",
      newBlogPost
    })
  } catch (error) {
    next(error)
  }
}

const updateBlogPost = async (req, res, next) => {
  const { body } = req
  const { blogPostId } = req.params
  try {
    const updatedBlogPost = await blogPostService.updateBlogPost(blogPostId, body)
    if (!blogPostId) {
      return res.status(404).send({
        statusCode: 404,
        message: "Cannot update blog post"
      })
    }
    res.status(200).send({
      statusCode: 200,
      message: "Blog post updated successfully",
      updatedBlogPost
    })
  } catch (error) {
    next(error)
  }
}

const deleteBlogPost = async (req, res, next) => {
  const { blogPostId } = req.params
  try {
    if (!blogPostId) {
      return res.status(400).send({
        statusCode: 400,
        message: "Invalid param provided"
      })
    }
    await blogPostService.deleteBlogPost(blogPostId)
    res.status(200).send({
      statusCode: 200,
      message: "Blog post deleted successfully"
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getBlogPosts,
  getBlogPostsByTitle,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
}