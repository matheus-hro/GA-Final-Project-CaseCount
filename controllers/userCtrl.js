const User = require('../models/CaseCountUser.js')

async function create (req, res) {
   let newUser = req.body;
   try {
       await User.create(newUser)
       const token = jwt.sign({ newUser }, process.env.SECRET, { expiresIn: '48h' });
       res.status(200).json(token)
   }catch(err){
       res.json(err);
   }
}

async function find (req, res) {
   let newBlogPost = req.body;
   try{
       await BlogPost.create(newBlogPost)
       res.status(200).json("Success!")
   }catch(err){
       res.json(err);
   }
}

async function destroy (req, res) {
   try{
     let blogPostArray = await BlogPost.find()
     res.status(200).json(blogPostArray)
  }catch(err){
     res.json(err);
  }
}

module.exports = {
   create,
   find
}