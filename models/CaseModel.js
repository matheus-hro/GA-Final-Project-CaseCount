const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseModelSchema = new Schema ({
    phoneManufacturer: {type: String, enum:['Apple', 'Google', 'Samsung'], required: [true, 'Please enter a phone manufacturer.']},
    phoneModel: {type: String, required: [true, 'Please enter a phone model.']},
    type: {type: String , enum:['Slim', 'Rugged'], required: [true, 'A case must have a type.']},
    imgUrl: {type: String},
    basePrice: {type: Number, required:[true, 'A case must have a base price']}
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('CaseModel', caseModelSchema)