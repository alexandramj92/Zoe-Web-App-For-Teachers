const db = require("../models");
// const Project = require("../");


module.exports = {
  
  //populate projects with students
  populate: function(req, res) {
    db.Project.find({})
      .populate("students")
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },

    // findById: function(req, res) {
    //   db.Project
    //     .findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },

    //Create a new project and associate it with a specific us er
    create: function(req, res) {
      console.log(req.body);
      // const userId = req.body.userId;
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
          
          


        // .then(err => {
        //   if(err)
        //     res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
        //   else {
        //     req.user.projects.push(project)
        //     req.user.save(err => {
        //         if(err)
        //         res.status(500).json({message:{msgBody : "Error has occured", msgError: true}});
        //         else 
        //           res.status(200).json({message: {msgBody : "Successfully created project", msgError: false}});
        //     });
        //   }
        // }
        // )
          
        // .then((_id) => db.User.findOneAndUpdate({"_id" : `${userId}`}, {$push: {projects: _id}}, {new: true}))
        // .then(dbUser => res.json(dbUser))
        // .catch(err => res.status(422).json(err));
    // },
    
    // update: function(req, res) {
    //   db.Project
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    remove: function(req, res) {
      const projectId = req.params.projectId;
      console.log(projectId);
      db.Project
        .findById({ _id: projectId })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  