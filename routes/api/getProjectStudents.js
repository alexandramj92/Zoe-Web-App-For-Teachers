const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/dashboard"
router.route("/:id")
//populates the students of a specific project based on the project id passed in the req.params
  .get(projectsController.populate)
  



module.exports = router;