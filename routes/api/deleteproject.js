const router = require("express").Router();
const deleteProjectController = require("../../controllers/projectsController");
const passport = require('passport');

// Matches with "/api/deleteproject/id"
router.route("/:id")
//deletes a project based on the project id passed in the req.params
  .delete(passport.authenticate('jwt', {session: false}), deleteProjectController.remove);



module.exports = router;