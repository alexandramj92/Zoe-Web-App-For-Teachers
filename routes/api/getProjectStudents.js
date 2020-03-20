const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/dashboard"
router.route("/")
  .get(projectsController.populate)
  



module.exports = router;