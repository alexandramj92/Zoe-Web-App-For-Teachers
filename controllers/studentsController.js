const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Student
        .find(req.query)
        .sort({ lastName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // findById: function(req, res) {
    //   db.Student
    //     .findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    create: function(req, res) {
      const userId = req.body.userId;
      const student = new db.Student(req.body);
      console.log(userId);
        db.Student
        .create(student)
        .then((_id) => db.User.findOneAndUpdate({"_id" : `${userId}`}, {$push: {students: _id}}, {new: true}))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Student
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Student
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  