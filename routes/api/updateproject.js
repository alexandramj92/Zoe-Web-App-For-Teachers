const router = require("express").Router();
const updateProjectController = require("../../controllers/projectsController");
const passport = require('passport');

// Matches with "/api/updateproject/:id"
router.route("/:id")
//updates a project based on the project id passed in the req.params
  .put(passport.authenticate('jwt', {session: false}), updateProjectController.update);



module.exports = router;