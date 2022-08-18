const express = require('express')
const userCtrl = require('../controllers/userCtrl.js')
const colorsCntrl = require('../controllers/colorCtrl.js')
const router = express.Router();

router.post('/signup', userCtrl.create);
router.post('/login', userCtrl.login);
router.get('/colors', colorsCntrl.index);

module.exports = router