const router = require("express").Router();
const removeStudentController = require("../../controllers/studentsController");
const passport = require('passport');


// Matches with "/api/removeProjectStudents/id"
router.route("/:id")
//removes a new student from a specific project, the project id is passed in as a parameter
  .post(passport.authenticate('jwt', {session: false}), removeStudentController.removeProjectStudent);



module.exports = router;