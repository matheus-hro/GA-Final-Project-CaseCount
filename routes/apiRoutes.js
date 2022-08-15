const express = require('express')
const userCtrl = require('../controllers/userCtrl.js')
const router = express.Router();

router.post('/signup', userCtrl.create);
router.post('/login', userCtrl.login);


module.exports = router