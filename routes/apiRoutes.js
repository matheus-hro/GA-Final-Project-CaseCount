const express = require('express')
const userCtrl = require('../controllers/userCtrl.js')
const colorsCntrl = require('../controllers/colorCtrl.js')
const userDesigCtrl = require('../controllers/userDesign.js')
const caseModelCtrl = require('../controllers/caseModel.js')
const router = express.Router();

router.post('/signup', userCtrl.create);
router.post('/login', userCtrl.login);

router.get('/colors', colorsCntrl.index);

router.post('/user-design', userDesigCtrl.create);

router.get('/case-models', caseModelCtrl.index)


module.exports = router