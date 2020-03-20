const router = require("express").Router();
const dashboardRoutes = require("./dashboard");
// const codeRoutes = require("./code");



//routes
router.use("/dashboard", dashboardRoutes);
// router.use("/code", codeRoutes);


module.exports = router;
