const router = require("express").Router();
const addProjectController = require("../../controllers/projectsController");
const passport = require('passport');

// Matches with "/api/addproject"
router.route("/")
//creates a new project and adds it to the user logged in
  .post(passport.authenticate('jwt', {session: false}), addProjectController.create);


module.exports = router;