const Color = require('../models/Color.js');

async function index (req, res) {
    try {
        const colors = await Color.find();
        res.status(200).json(colors)
    } catch(err) {
        res.status(400).json(err);
        console.log("Caught error in Color Index: ", err);
    }
}

module.exports = {
   index,
}