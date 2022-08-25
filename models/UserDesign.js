const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const retrieveStripeProduct = require('../controllers/stripeCtrl.js').retrieveProduct;

async function checkIfStripeProdExists(prodId){
    try{
        const stripeLookUp = await retrieveStripeProduct(prodId);
        if(stripeLookUp){
            return true;
        }
        return false;
    }catch(err){
        console.log("error when calling stripe controller function");
        return false;
    }
}

const userDesignSchema = new Schema ({
    user: {type: Schema.Types.ObjectId , ref: 'User', required: [true, 'A design must belong to a user!']},
    productId: {type: String, validate:{validator:checkIfStripeProdExists}, required: [true, 'A design must have a case model!']},
    color: {type: Schema.Types.ObjectId , ref: 'Color', required: [true, 'A design must have a color!']},
    pattern: {type: Schema.Types.ObjectId , ref: 'Pattern'},
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('UserDesign', userDesignSchema)