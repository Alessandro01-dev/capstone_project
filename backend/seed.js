const mongoose = require('mongoose');
const User = require('./modules/user/user.schema');
const Tutor = require('./modules/tutor/tutor.schema');
const Blog = require('./modules/blogPost/blogPost.schema')
require('dotenv').config();

const userData = require('./userData');
const tutorData = require('./tutorData');
const communityPostData = require('./communityPostData')

async function runSeed() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connesso a MongoDB...");

    await User.deleteMany({});
    await Tutor.deleteMany({});
    await Blog.deleteMany({})
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

    const updatePromises = createdPosts.map(post => {
      return User.findByIdAndUpdate(post.user, {
        $push: { blogPosts: post._id }
      });
    });

    await Promise.all(updatePromises);
    console.log("Riferimenti dei post aggiornati correttamente nei profili utente.");

    console.log("Seeding completato con successo!");
    process.exit();
  } catch (error) {
    console.error("Errore durante il seeding:", error);
    process.exit(1);
  }
};

runSeed();