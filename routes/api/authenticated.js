const router = require("express").Router();
const authenticatedController = require("../../controllers/authenticatedController");
const passport = require('passport');
// const passportConfig = require('../passport');


// Matches with "/api/authenticated"
router.route("/")
  .get(passport.authenticate('jwt', {session: false}), authenticatedController.authenticate);
  



module.exports = router;