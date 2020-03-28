const router = require("express").Router();
const registerController = require("../../controllers/registerController");

// Matches with "/api/register"
router.route("/")
//registers a new user
  .post(registerController.create);
  



module.exports = router;