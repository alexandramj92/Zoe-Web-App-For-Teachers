const router = require("express").Router();
const authenticatedController = require("../../controllers/authenticatedController");
const passport = require('passport');


// Matches with "/api/authenticated"
router.route("/")
//verifies what users are logged in and provides the username and id to the front-end
  .get(passport.authenticate('jwt', {session: false}), authenticatedController.authenticate);
  



module.exports = router;