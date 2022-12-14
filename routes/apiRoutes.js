const express = require('express')
const userCtrl = require('../controllers/userCtrl.js')
const colorsCntrl = require('../controllers/colorCtrl.js')
const userDesignCtrl = require('../controllers/userDesign.js')
const router = express.Router();

router.post('/signup', userCtrl.create);
router.post('/login', userCtrl.login);

router.get('/colors', colorsCntrl.index);

/////Protected routes go here
router.use(require('../config/auth.js'));
router.post('/user-design', userDesignCtrl.create);
router.get('/user-design', userDesignCtrl.index);
router.delete('/user-design', userDesignCtrl.destroy);

module.exports = router