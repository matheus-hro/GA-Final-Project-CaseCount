const express = require('express')
const stripeCtrl = require('../controllers/stripeCtrl.js')
const router = express.Router();

router.get('/products', stripeCtrl.index); //list of products

router.post('/checkout', stripeCtrl.initiateCheckout) //initiate checkout

module.exports = router