
const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require('passport');


// Matches with "/api/login"
router.route("/")
  .post(passport.authenticate('local', {session: false}), loginController.validate);
  



module.exports = router;