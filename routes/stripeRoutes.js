const express = require('express')
const stripeCtrl = require('../controllers/stripeCtrl.js')
const router = express.Router();

router.get('/products', stripeCtrl.index); //list of products
router.get('/checkout', stripeCtrl.checkoutStatus) //get checkout result

router.post('/checkout', stripeCtrl.initiateCheckout) //initiate checkout

module.exports = router