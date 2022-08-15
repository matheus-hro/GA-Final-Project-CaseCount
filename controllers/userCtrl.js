const User = require('../models/CaseCountUser.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

async function authenticate (req, res) {
   //this function is used for non-login authentication
   let newBlogPost = req.body;
   try{
       await BlogPost.create(newBlogPost)
       res.status(200).json("Success!")
   }catch(err){
       res.json(err);
   }
}

async function create (req, res) {
   let user = req.body;
   try {
       user = await User.create(user)
       const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' });
       res.status(200).json(token)
   }catch(err){
       console.log("error is: ", err)
       res.status(400).json('Unable to sign in!');
   }
}

async function login (req, res) {
   try {
      const user = await User.findOne({ email: req.body.email });
      if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '48h' });
      res.status(200).json(token)
   } catch(err) {
      console.log(err);
      res.status(400).json('Bad credentials');
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
   authenticate,
   login,
   destroy
}