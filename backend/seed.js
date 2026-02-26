const mongoose = require('mongoose');
const User = require('./modules/user/user.schema');
const Tutor = require('./modules/tutor/tutor.schema');
const Blog = require('./modules/blogPost/blogPost.schema')
const Comment = require('./modules/comment/comment.schema')
const ConnectionRequest = require('./modules/connectionRequest/connectionRequest.schema')
require('dotenv').config();
const userData = require('./userData');
const tutorData = require('./tutorData');
const communityPostData = require('./communityPostData');
const commentsData = require('./commentData')

async function runSeed() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connesso a MongoDB...");

    await User.deleteMany({});
    await Tutor.deleteMany({});
    await Blog.deleteMany({});
    await Comment.deleteMany({})
    await ConnectionRequest.deleteMany({});
    console.log("Database pulito.");

    const createdUsers = await User.create(userData);
    console.log(`${createdUsers.length} utenti creati.`);

    const tutorsWithIds = tutorData.map(tutorMock => {

      const relatedUser = createdUsers.find(user => user.email === tutorMock.email);

      if (relatedUser) {

        const { email, ...cleanTutorData } = tutorMock;
        console.log(`Associo Tutor ${email} a User ID: ${relatedUser._id}`);
        return {
          ...cleanTutorData,
          user: relatedUser._id
        };
      }
      console.warn(`Attenzione: Nessun utente trovato per il tutor ${tutorMock.email}`);
      return null;
    }).filter(tutor => tutor !== null);

    await Tutor.insertMany(tutorsWithIds);
    console.log(`${tutorsWithIds.length} tutor associati e creati.`);

    const postsWithAuthors = communityPostData.map((post, index) => {

      const author = createdUsers[index % createdUsers.length];
      return {
        ...post,
        user: author._id
      };
    });

    const createdPosts = await Blog.create(postsWithAuthors);
    console.log(`${createdPosts.length} blog posts creati e assegnati agli utenti.`);

    const commentsWithLinks = commentsData.map((commentData) => {

      const relatedPost = createdPosts.find(p => p.title === commentData.postTitle);

      if (relatedPost) {

        const randomAuthor = createdUsers[Math.floor(Math.random() * createdUsers.length)];
        const { postTitle, ...cleanComment } = commentData;

        return {
          ...cleanComment,
          blogPost: relatedPost._id,
          user: randomAuthor._id
        };
      }
      return null;
    }).filter(c => c !== null);

    const createdComments = await Comment.create(commentsWithLinks);
    console.log(`${createdComments.length} commenti creati.`);

    const updatePromises = [];

    createdPosts.forEach(post => {
      updatePromises.push(User.findByIdAndUpdate(post.user, { $push: { blogPosts: post._id } }));
    });

    createdComments.forEach(comment => {

      updatePromises.push(Blog.findByIdAndUpdate(comment.blogPost, { $push: { comments: comment._id } }));

      updatePromises.push(User.findByIdAndUpdate(comment.user, { $push: { comments: comment._id } }));
    });

    const likePromises = createdPosts.map(post => {
      const randomUsers = createdUsers
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 15))
        .map(u => u._id);

      return Blog.findByIdAndUpdate(post._id, { $set: { likes: randomUsers } });
    });

    await Promise.all(likePromises);
    console.log("Like casuali aggiunti ai post!");

    await Promise.all(updatePromises);
    console.log("Tutti i riferimenti incrociati sono stati aggiornati.");

    console.log("Seeding completato con successo!");
    process.exit();
  } catch (error) {
    console.error("Errore durante il seeding:", error);
    process.exit(1);
  }
};

runSeed();