const db = require("../models");

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

    //Create a new project and associate it with a specific user
    create: function({body}, res) {
      db.Project
        .create(body)
        .then(({_id}) => db.User.findOneAndUpdate({"_id" : `${userID}`}, {$push: {projects: _id}}, {new: true}))
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    
    update: function(req, res) {
      db.Project
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Project
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  