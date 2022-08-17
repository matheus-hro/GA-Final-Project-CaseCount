const express = require('express');
const router = express.Router();
//const blogPostCtrl = require('../controllers/blogPost.js');

//router.get('/', blogPostCtrl.create)

router.get('/', blogPostCtrl.index);

/login
/canvas 
/cart
/about


module.exports = router;