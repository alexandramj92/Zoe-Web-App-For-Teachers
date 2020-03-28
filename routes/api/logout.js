
const router = require("express").Router();
const logoutController = require("../../controllers/logoutController");
const passport = require('passport');
const JWT = require('jsonwebtoken');


// Matches with "/api/logout"
router.route("/")
//logs out a user
  .get(passport.authenticate('jwt', {session: false}), logoutController.logout);
  



module.exports = router;