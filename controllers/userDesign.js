const UserDesign = require('../models/UserDesign.js');

module.exports = {
    create
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
