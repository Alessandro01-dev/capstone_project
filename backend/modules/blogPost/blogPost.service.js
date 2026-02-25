const UserSchema = require('../user/user.schema')
const BlogPostSchema = require('./blogPost.schema')
const CommentSchema = require('../comment/comment.schema')

const getBlogPosts = async (page, pageSize) => {
  const blogPosts = await BlogPostSchema.find()
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .populate('user', 'name surname avatar nationality isTutor')
    .populate('comments')
  const totalBlogPosts = await BlogPostSchema.countDocuments()
  const totalPages = Math.ceil(totalBlogPosts / pageSize)
  return {
    page,
    pageSize,
    totalBlogPosts,
    totalPages,
    blogPosts
  }
}

const getBlogPostsByTitle = async (searchedTitle, page, pageSize) => {
  const searchQuery = { title: { $regex: searchedTitle, $options: 'i' } }
  const blogPosts = await BlogPostSchema.find(searchQuery)
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .populate('user', 'name surname avatar nationality isTutor')
  const totalBlogPosts = await BlogPostSchema.find(searchQuery).countDocuments()
  const totalPages = Math.ceil(totalBlogPosts / pageSize)
  return {
    page,
    pageSize,
    totalBlogPosts,
    totalPages,
    blogPosts
  }
}

const getBlogPostById = async (blogPostId) => {
  const blogPost = await BlogPostSchema.findById(blogPostId).populate('user', 'name surname avatar nationality isTutor')
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        select: 'name surname avatar nationality isTutor'
      }
    });
  return blogPost
}

const createBlogPost = async (body) => {
  const userId = body.user
  const newBlogPost = new BlogPostSchema(body)
  const savedBlogPost = await newBlogPost.save()
  await UserSchema.updateOne({ _id: userId }, { $push: { blogPosts: newBlogPost._id } })
  return savedBlogPost
}

const updateBlogPost = async (blogPostId, body) => {
  const options = { new: true }
  return await BlogPostSchema.findByIdAndUpdate(blogPostId, body, options)
}

const deleteBlogPost = async (blogPostId) => {
  const post = await BlogPostSchema.findById(blogPostId);
  if (post) {
    await UserSchema.updateOne({ _id: post.user }, { $pull: { blogPosts: blogPostId } })
    await CommentSchema.deleteMany({ blogPost: blogPostId })
    return await BlogPostSchema.findByIdAndDelete(blogPostId)
  }
  return null;
}

const toggleLike = async (blogPostId, userId) => {
  const blogPost = await BlogPostSchema.findById(blogPostId);
  if (!blogPost) throw new Error("Post non trovato");

  const hasLiked = blogPost.likes.includes(userId);
  const update = hasLiked
    ? { $pull: { likes: userId } }
    : { $addToSet: { likes: userId } };

  return await BlogPostSchema.findByIdAndUpdate(
    blogPostId,
    update,
    { new: true }
  )
    .populate('user', 'name surname avatar nationality isTutor')
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        select: 'name surname avatar nationality isTutor'
      }
    });
};




module.exports = {
  getBlogPosts,
  getBlogPostsByTitle,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  toggleLike
}