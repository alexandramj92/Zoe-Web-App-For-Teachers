
const router = require("express").Router();
const logoutController = require("../../controllers/logoutController");
const passport = require('passport');
const JWT = require('jsonwebtoken');
// const passportConfig = require('../passport');


// Matches with "/api/logout"
router.route("/")
  .get(passport.authenticate('jwt', {session: false}), logoutController.logout);
  



module.exports = router;