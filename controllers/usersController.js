const db = require("../models");

module.exports = {
//populate users with students and projects
    populate: function(req, res) {
      db.User
      .find()
        // .populate("projects")
        // .populate("students")
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
  };