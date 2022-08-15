const express = require('express')
const router = express.Router();
const path = require('path');

router.get('/user', function (req, res, next) {
  var options = {
    root: path.join(__dirname),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  var fileName = 'userTest.html'
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

router.get('login', function (req, res, next) {
  var options = {
    root: path.join(__dirname),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  var fileName = 'loginTest.html'
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

module.exports = router