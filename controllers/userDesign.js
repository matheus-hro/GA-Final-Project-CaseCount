const UserDesign = require('../models/UserDesign.js');

module.exports = {
    create,
    index
}

async function create (req, res) {
    let newDesign = req.body;
    try {
        newDesign = await UserDesign.create(newDesign)
        res.status(200).json("Successfully saved!")
    } catch(err) {
        console.log("error in userdesign create controller is: ", err)
        res.status(400).json("Failed to save design.")
    }
}

async function index (req, res) {
    let user = req.user;
    let userDesigns = [];
    try {
        userDesigns = await UserDesign.find({user:user._id}).populate('caseModel').populate('color').exec();
        res.status(200).json(userDesigns);
    } catch(err) {
        console.log("error in userdesign index controller is: ", err)
        res.status(400).json("Failed to retrieve designs.")
    }
}
