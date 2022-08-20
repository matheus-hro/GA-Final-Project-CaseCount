const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDesignSchema = new Schema ({
    user: {type: Schema.Types.ObjectId , ref: 'User', required: [true, 'A design must belong to a user!']},
    //TYPE MUST BE LATER CHANGED TO "OBJECTID" WITH RED TO "PHONEMODEL"
    phoneModel: {type: String, required: [true, 'A design must have a phone model!']},
    color: {type: Schema.Types.ObjectId , ref: 'Color', required: [true, 'A design must have a color!']},
    pattern: {type: Schema.Types.ObjectId , ref: 'Pattern'},
    //quantity: {type: Schema.Types.Number, min: 0, max:9 , required: [true, 'Please enter a quantity between 0 and 9!']},
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('UserDesign', userDesignSchema)