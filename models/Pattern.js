const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patternSchema = new Schema ({
    name: {type: String, unique: true, required: [true, 'Please enter a name for the pattern']},
    svg: {type: String, required: [true, 'Please enter a .svg string!']},
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Pattern', patternSchema)