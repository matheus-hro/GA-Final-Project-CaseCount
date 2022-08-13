const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('email-validator');
const UserDesign = require('./UserDesign.js');
const bcrypt = require('bcrypt');
require('dotenv').config(); 

async function encryptPw(){
   try{
    this.password = await bcrypt.hash(this.password, parseInt(process.env.SALT_ROUNDS))
   }catch(err){
    console.log(err);
    this.password = "";
   }
}

const userSchema = new Schema ({
    email:{type: String, unique: true, lowercase: true, trim: true, required: [true, 'Please enter an email address.'], validate:[validator.validate, 'Please enter a valid email address']},
    name: {type: String, trim: true, required: [true, 'Please enter a valid username.']},
    password: {type: String, trim: true, minlength:6,required: [true, 'Please enter a valid password.']}
},
{
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
          delete ret.password;
          delete ret.createdAt;
          delete ret.updatedAt;
          delete ret.__v;
          return ret;
        }
    },
    methods: {
        findUserDesigns(){
            return UserDesign.find({ user: this._id });
        }
    }
}
);

userSchema.pre('save', encryptPw)
  
module.exports = mongoose.model('CaseCountUser', userSchema)