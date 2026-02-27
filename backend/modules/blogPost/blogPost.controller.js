const blogPostService = require('./blogPost.service')
const UserNotFoundException = require('../../exceptions/user/UserNotFoundException');

const getBlogPosts = async (req, res, next) => {
  const { page = 1, pageSize = 4, search = "", searchMode = "all" } = req.query
  try {
    const {
      totalBlogPosts,
      totalPages,
      blogPosts,
      page: currentPage
    } = await blogPostService.getBlogPosts(page, pageSize, search, searchMode)
    
    res.status(200).send({
      statusCode: 200,
      totalBlogPosts: Number(totalBlogPosts),
      totalPages: Number(totalPages),
      blogPosts,
      currentPage
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

const getBlogPostsByUserId = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const blogPosts = await blogPostService.getBlogPostsByUserId(userId);

    res.status(200).send({
      statusCode: 200,
      blogPosts
    });
  } catch (error) {
    next(error);
  }
};

const createBlogPost = async (req, res, next) => {
  const { body } = req

  const userId = body.user || req.user?.id;

  if (!userId) {
    throw new UserNotFoundException()
  }

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

const uploadFileOnCloud = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send({
        statusCode: 400,
        message: "No file uploaded"
      });
    }

    res.status(200).send({
      statusCode: 200,
      cover: req.file.path
    });
  } catch (error) {
    next(error);
  }
};

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

const toggleBlogPostLike = async (req, res, next) => {
  try {
    const { blogPostId } = req.params;
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).send({ message: "User ID not found in token" });
    }

    const updatedPost = await blogPostService.toggleLike(blogPostId, userId);

    res.status(200).send({
      statusCode: 200,
      message: "Like added successfully",
      updatedPost
    })
  } catch (error) {
    next(error)
  }
};


module.exports = {
  getBlogPosts,
  getBlogPostById,
  getBlogPostsByUserId,
  createBlogPost,
  uploadFileOnCloud,
  updateBlogPost,
  deleteBlogPost,
  toggleBlogPostLike
}