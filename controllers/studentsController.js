const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Student
        .find(req.query)
        .sort({ lastName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
      //creates a new student with the firstName and lastName passed through the req.body
      const student = new db.Student(req.body);
      //saves the new student and pushes it to the student array of the user logged in
      student.save(err => {
        if(err)
          res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
        else {
          req.user.students.push(student);
          req.user.save(err => {
            if(err) 
              res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
            else 
              res.status(200).json({message: {msgBody : "Successfully created student", msgError: false}});
            
          })
        }

      })
    },

    createbyProject: function(req, res) {
      const student = new db.Student(req.body);
      const targetProject = req.params.id;

      db.Student
      //creates new student
      .create(student)
      //pushes new student into the specific project
      .then(db.Project.findOneAndUpdate({"_id" : `${targetProject}`}, {$push: {students: `${student._id}`}}, function(err, student){
        if(err) res.json(err);
        else res.json('Successfully created student and added it to the project');

      }))

    },

    remove: function(req, res) {
      //deletes a student based on the student id in req.params
      db.Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
        if(err) res.json(err);
        else res.json('Successfully removed student');
    });
    }
  };
  