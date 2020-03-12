var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
   
    db.wp_6kmg8v_users.findAll({
      include: [{ all: true, nested: true }]
    }).then(function(dbwp_6kmg8v_users) {
      res.json(dbwp_6kmg8v_users);
    });
  });


};

// User.findAll({ include: [{ all: true, nested: true }]});

