const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport');


// Matches with "/api/dashboard"
router.route("/")
//populates the students and projects array of the user that is currently logged in
  .get(passport.authenticate('jwt', {session: false}), usersController.populate)



module.exports = router;