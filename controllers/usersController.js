const db = require("../models");

module.exports = {
//populate users with students and projects
    populate: function(req, res) {
      db.User
      .findById({_id : req.user._id})
        .populate("projects")
        .populate("students")
        .exec((err, document) => {
          if(err)
            res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
          else {
            res.status(200).json({projects : document.projects, students: document.students, authenticated : true})
          }

        })
       
    }
  };