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
      console.log("error caught in authenticate user controller: ", err)
      res.status(400).json("Failed to authenticate.")
   }
}

async function create (req, res) {
   let user = req.body;
   try {
      user = await User.create(user)
      res.status(200).json("Successfully registered!")
   }catch(err){
      console.log("error in user create controller is: ", err)
      res.status(400).json("Failed to register.");
   }
}

async function login (req, res) {
   try {
      const user = await User.findOne({ email: req.body.email });
      if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '48h' });
      res.status(200).json(token)
   } catch(err) {
      console.log("error caught in login user controller: ", err);
      res.status(400).json('Failed to authenticate.');
   }
}

async function destroy (req, res) {
   try{
     let user = await User.find(req.body._id)
     res.status(200).json("Deleted.")
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