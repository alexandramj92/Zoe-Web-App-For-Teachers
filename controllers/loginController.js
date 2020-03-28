const db = require("../models");

const JWT = require('jsonwebtoken');
const passportConfig = require('../passport');

const signToken = userID  => {
    return JWT.sign({
        iss : "NoobCoder",
        //must match key in passport.js
        sub : userID
    }, "NoobCoder", {expiresIn: "1h"});
}

module.exports = {
//validate users in database

    validate:  function (req, res) {

        if(req.isAuthenticated()) {

            
            const {_id, username} = req.user;
            const token = signToken(_id);
            res.cookie('access_token', token, {httpOnly: true, sameSite: true});
            res.status(200).json({isAuthenticated: true, user: {username, _id}})
        }
     
  }};