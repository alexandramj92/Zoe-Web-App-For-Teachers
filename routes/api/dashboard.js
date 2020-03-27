const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');


// Matches with "/api/dashboard"
router.route("/")
  .get(passport.authenticate('jwt', {session: false}), usersController.populate)



module.exports = router;