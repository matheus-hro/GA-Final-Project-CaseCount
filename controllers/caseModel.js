const CaseModel = require('../models/CaseModel.js')

async function index (req, res) {
    try {
        const caseModels = await CaseModel.find();
        res.status(200).json(caseModels)
    } catch(err) {
        res.status(400).json(err);
        console.log("Caught error in case model Index: ", err);
    }
}

module.exports = {
   index,
}