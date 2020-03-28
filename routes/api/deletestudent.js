const router = require("express").Router();
const deleteStudentController = require("../../controllers/studentsController");
const passport = require('passport');

// Matches with "/api/deletestudent/id"
router.route("/:id")
//deletes a student based on the student id passed in the req.params
  .delete(passport.authenticate('jwt', {session: false}), deleteStudentController.remove);



module.exports = router;