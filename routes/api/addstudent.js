const router = require("express").Router();
const addStudentController = require("../../controllers/studentsController");

// Matches with "/api/addstudents"
router.route("/")
//   .get(addStudentController.findAll)
  .post(addStudentController.create);

// Matches with "/api/addstudents/:id"
// router
//   .route("/:id")
//   .get(addStudentController.findById)
//   .put(addStudentController.update)
//   .delete(addStudentController.remove);

module.exports = router;