const router = require("express").Router();
const addStudentController = require("../../controllers/studentsController");
const passport = require('passport');


// Matches with "/api/addstudents"
router.route("/")
//creates a student and adds it to the user that is logged in
  .post(passport.authenticate('jwt', {session: false}), addStudentController.create);


module.exports = router;