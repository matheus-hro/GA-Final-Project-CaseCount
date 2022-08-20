const jwt = require('jsonwebtoken');
const CaseCountUser = require('../models/CaseCountUser');
const SECRET = process.env.SECRET;

module.exports = verifyToken;

function verifyToken (req, res, next) {
  let token = req.get('Authorization') || req.query.token || req.body.token;
  if(token){
    token = token.replace('Bearer ', '');
    jwt.verify(token, SECRET, function(err, decoded) {
      if(err){
        next(err);
      }else{
        req.user = decoded.user;    
        next();
      }
    });
  }else{
    next();
  }
};
