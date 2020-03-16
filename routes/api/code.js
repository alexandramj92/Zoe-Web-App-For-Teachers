const router = require("express").Router();
const codeRoute = require("./code");

// Book routes
router.use("/code", codeRoute);

module.exports = router;