const router = require("express").Router();
const dashboardRoutes = require("./dashboard");
// const codeRoutes = require("./code");
const addprojectRoutes = require("./addproject");
const getprojectStudentsRoutes = require("./getProjectStudents");
const addStudentsRoutes = require("./addstudent");


//routes
router.use("/dashboard", dashboardRoutes);
router.use("/addproject", addprojectRoutes);
router.use("/getProjectStudents", getprojectStudentsRoutes);
router.use("/addstudent", addStudentsRoutes);

// router.use("/code", codeRoutes);


module.exports = router;
