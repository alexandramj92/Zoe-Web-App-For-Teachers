const router = require("express").Router();
const addProjectController = require("../../controllers/projectsController");
const passport = require('passport');

// Matches with "/api/addproject"
router.route("/")
//   .get(addProjectController.findAll)
  .post(passport.authenticate('jwt', {session: false}), addProjectController.create);

// Matches with "/api/addproject/:id"
// router
//   .route("/:id")
//   .get(addProjectController.findById)
//   .put(addProjectController.update)
//   .delete(addProjectController.remove);

module.exports = router;