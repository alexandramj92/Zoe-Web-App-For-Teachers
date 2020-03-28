const db = require("../models");


module.exports = {
  
  //populate projects with students
  populate: function(req, res) {
    db.Project.find({_id : req.params.id})
      .populate("students")
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },


    //Create a new project and associate it with the specific user that is logged in
    create: function(req, res) {
      console.log(req.body);
      const project = new db.Project(req.body);
      project.generateCode();
      
      project.save(err => {
        if(err)
          res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
        else {
          req.user.projects.push(project);
          req.user.save(err => {
            if(err) 
              res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
            else 
              res.status(200).json({message: {msgBody : "Successfully created project", msgError: false}});
            
          })
        }

      })
      
        },
  
    
    //removes a project based on the project id passed in the req.params
    remove: function(req, res) {
      db.Project.findByIdAndRemove({_id: req.params.id}, function(err, project){
        if(err) res.json(err);
        else res.json('Successfully removed project');
    });
    }
  };
  