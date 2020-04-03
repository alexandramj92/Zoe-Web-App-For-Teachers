const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");


// Matches with "/api/getProject"
router.route("/:projectCode")
//retrieves projects by code and populates students
  .get(projectsController.getProjectbyCode)



module.exports = router;