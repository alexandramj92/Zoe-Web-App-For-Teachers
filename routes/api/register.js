const router = require("express").Router();
const registerController = require("../../controllers/registerController");

// Matches with "/api/register"
router.route("/")
  .post(registerController.create);
  



module.exports = router;