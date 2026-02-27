const UserSchema = require('../user/user.schema')
const BlogPostSchema = require('./blogPost.schema')
const CommentSchema = require('../comment/comment.schema')

const getBlogPosts = async (page, pageSize, search = "", searchMode = "all") => {

  let query = {};

  if (search) {
    switch (searchMode) {
      case "title":
        query = { title: { $regex: search, $options: 'i' } };
        break;

      case "author":
        const users = await UserSchema.find({
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { surname: { $regex: search, $options: 'i' } },
            {
              $expr: {
                $regexMatch: {
                  input: { $concat: ["$name", " ", "$surname"] },
                  regex: search, options: "i"
                }
              }
            }
          ]
        }).select('_id');
        query = { user: { $in: users.map(user => user._id) } };
        break;

      case "category":
        query = { category: { $regex: search, $options: 'i' } };
        break;

      default:
        const allUsers = await UserSchema.find({
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { surname: { $regex: search, $options: 'i' } },
            {
              $expr: {
                $regexMatch: {
                  input: { $concat: ["$name", " ", "$surname"] },
                  regex: search, options: "i"
                }
              }
            }
          ]
        }).select('_id');
        query = {
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' } },
            { user: { $in: allUsers.map(user => user._id) } }
          ]
        };
    }
  }

  const blogPosts = await BlogPostSchema.find(query)
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .populate('user', 'name surname avatar nationality isTutor')
    .populate('comments')
  const totalBlogPosts = await BlogPostSchema.countDocuments(query)
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

const getBlogPostsByUserId = async (userId) => {
  const blogPosts = await BlogPostSchema.find({ user: userId })
    .sort({ createdAt: -1 })
    .populate('user', 'name surname avatar nationality isTutor');

  return blogPosts;
};

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
  getBlogPostById,
  getBlogPostsByUserId,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  toggleLike
}