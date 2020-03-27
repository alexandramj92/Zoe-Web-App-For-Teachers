const router = require("express").Router();
const addStudentController = require("../../controllers/studentsController");
const passport = require('passport');


// Matches with "/api/addstudents"
router.route("/")
//   .get(addStudentController.findAll)
  .post(passport.authenticate('jwt', {session: false}), addStudentController.create);

// Matches with "/api/addstudents/:id"
// router
//   .route("/:id")
//   .get(addStudentController.findById)
//   .put(addStudentController.update)
//   .delete(addStudentController.remove);

module.exports = router;