const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email:{type: String, unique: true, lowercase: true, required: [true, 'Please enter a valid email address.']},
    name: {type: String, required: [true, 'Please enter a valid username.']},
},
{
    timestamps: true,
}
);
  

module.exports = mongoose.model('CaseCountUser', userSchema)