const router = require("express").Router();
const dashboardRoutes = require("./dashboard");
const addprojectRoutes = require("./addproject");
const getprojectStudentsRoutes = require("./getProjectStudents");
const addStudentsRoutes = require("./addstudent");
const loginRoutes = require("./login");
const registerRoutes = require("./register");
const logoutRoutes = require("./logout");
const authenticatedRoutes = require("./authenticated");
const deleteProjectRoutes = require("./deleteproject");
const deleteStudentRoutes = require("./deletestudent");
const addProjectStudentsRoutes = require("./addProjectStudents");
const removeProjectStudentsRoutes = require("./removeProjectStudents");


//api routes
router.use("/dashboard", dashboardRoutes);
router.use("/addproject", addprojectRoutes);
router.use("/getProjectStudents", getprojectStudentsRoutes);
router.use("/addstudent", addStudentsRoutes);
router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/logout", logoutRoutes);
router.use("/authenticated", authenticatedRoutes);
router.use("/deleteproject", deleteProjectRoutes);
router.use("/deletestudent", deleteStudentRoutes);
router.use("/addProjectStudents", addProjectStudentsRoutes);
router.use("/removeProjectStudents", removeProjectStudentsRoutes);




module.exports = router;
