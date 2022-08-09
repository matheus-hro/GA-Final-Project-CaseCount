/*const BlogPost = require('../models/blogPost.js'); 
module.exports = {
   create,
   index
}

async function create (req, res) {
   let newBlogPost = req.body;
   try {
       await BlogPost.create(newBlogPost)
       res.status(200).json("Success!")
   } catch(err) {
       res.json(err);
}
}

async function index (req, res) {
   try {
     let blogPostArray = await BlogPost.find()
     res.status(200).json(blogPostArray)
  } catch(err) {
     res.json(err);
  }
 }*/

