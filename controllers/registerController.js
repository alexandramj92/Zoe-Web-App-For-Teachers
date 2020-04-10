const db = require("../models");

module.exports = {
//save new users to database
    create: function(req, res) {
      const {username, email, password} = req.body;

      db.User
      .findOne({username}, (err, user) => {
          if(err)
            res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
          if(user)
            res.status(400).json({message: {msgBody: "Username is already taken", msgError: true}});
          else {
              const newUser = new db.User({username, email, password});
              newUser.save(err => {
                  if(err)
                    res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
                  else 
                    res.status(201).json({message: {msgBody: "Account successfully created", msgError: false}});
 

              })
          }


      })
        
    }
  };