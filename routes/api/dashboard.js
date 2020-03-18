const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/dashboard"
router.route("/")
  .get(usersController.populate)



module.exports = router;