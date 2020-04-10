const db = require("../models");


module.exports = {
  
  //populate projects with students
  populate: function(req, res) {
    db.Project.find({_id : req.params.id})
      .populate("students")
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },

  getProjectbyCode: function(req, res) {
    db.Project.find({projectCode : req.params.projectCode})
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
        if(err) {
          return res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
        }
        else {
          req.user.projects.push(project);
          req.user.save(err => {
            if(err) 
              return res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
            else 
              return res.status(200).json(project);
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
    },

    // update a project based on id passed in the req.params
    update: function (req, res) {
      const { projectName, projectDescription } = req.body
      db.Project.findByIdAndUpdate(
        {_id: req.params.id},
        { $set: 
          { 
            projectName: projectName,
            projectDescription: projectDescription
          }
        },
        { new: true }
      )
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(500).jsn(err))
    }
  };
  