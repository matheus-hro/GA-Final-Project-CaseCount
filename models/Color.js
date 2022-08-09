const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema ({
    name: {type: String, unique: true, required: [true, 'Please enter a name for the color']},
    hex: {type: String, unique: true, uppercase: true, match: [/^#{1}[a-fA-F0-9]{6}$/], required: [true, 'Please enter a HEX code for the color (e.g. #fff56a)']},
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Color', colorSchema)