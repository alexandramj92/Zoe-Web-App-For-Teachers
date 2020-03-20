const router = require("express").Router();
const addProjectController = require("../../controllers/projectsController");

// Matches with "/api/addproject"
router.route("/")
//   .get(addProjectController.findAll)
  .post(addProjectController.create);

// Matches with "/api/addproject/:id"
// router
//   .route("/:id")
//   .get(addProjectController.findById)
//   .put(addProjectController.update)
//   .delete(addProjectController.remove);

module.exports = router;