const router = require("express").Router();
const addStudentController = require("../../controllers/studentsController");
const passport = require('passport');


// Matches with "/api/addProjectStudents/id"
router.route("/:id")
//creates a new student and adds it to a specific project, the project id is passed in as a parameter
  .post(passport.authenticate('jwt', {session: false}), addStudentController.createbyProject);



module.exports = router;