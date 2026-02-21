const CommentSchema = require('./comment.schema')
const BlogPostSchema = require('../blogPost/blogPost.schema')
const UserSchema = require('../user/user.schema')

const getBlogPostComments = async (page, pageSize, blogPostId) => {
  const comments = await CommentSchema.find({ blogPost: blogPostId })
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .populate("user", "name surname avatar nationality isTutor")
  const totalComments = await CommentSchema.countDocuments({ blogPost: blogPostId })
  const totalPages = Math.ceil(totalComments / pageSize)
  return {
    page,
    pageSize,
    totalComments,
    totalPages,
    comments
  }
}

const getBlogPostCommentById = async (blogPostId, commentId) => {
  return await CommentSchema.findOne({
    _id: commentId,
    blogPost: blogPostId
  })
}

const createBlogPostComment = async (body) => {
  const blogPostId = body.blogPost
  const userId = body.user
  const newComment = new CommentSchema(body)
  const savedComment = await newComment.save()

  await BlogPostSchema.updateOne({ _id: blogPostId }, { $push: { comments: newComment._id } })

  await UserSchema.updateOne({ _id: userId }, { $push: { comments: newComment._id } })

  return savedComment
}

const updateBlogPostComment = async (blogPostId, commentId, { content, rating }) => {
  const options = { new: true }
  const updatedComment = await CommentSchema.findOneAndUpdate({
    _id: commentId,
    blogPost: blogPostId
  }, { content, rating }, options)
  return updatedComment
}

const deleteBlogPostComment = async (blogPostId, commentId) => {
  const deletedComment = await CommentSchema.findOneAndDelete({
    _id: commentId,
    blogPost: blogPostId
  })

  if (deletedComment) {
    await BlogPostSchema.updateOne(
      { _id: blogPostId },
      { $pull: { comments: commentId } }
    )

    await UserSchema.updateOne(
      { _id: deletedComment.user },
      { $pull: { comments: commentId } }
    )
  }

  return deletedComment
}

module.exports = {
  getBlogPostComments,
  getBlogPostCommentById,
  createBlogPostComment,
  updateBlogPostComment,
  deleteBlogPostComment
}