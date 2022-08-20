const UserDesign = require('../models/UserDesign.js');

module.exports = {
    create
}

async function create (req, res) {
    let newDesign = req.body;
    try {
        await UserDesign.create(newDesign)
        res.status(200).json("Success!")
    } catch(err) {
        console.log("error in userdesign create controller is: ", err)
        res.json(err);
 }
}
