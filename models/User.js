const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { 
    type: String, 
    min: [1, 'Too few characters'],
    required: [true, 'Please enter a username']
   },

   email: {
    type: String,
    min: [3, 'Please enter an email in the correct format'],
    required: [true, 'Please enter an email']
},

   password: {
     type: String,
     min: [8, 'Your password must be at least 8 characters long'],
     required: [true, 'Please enter a password']

   },

  projects: [{
    type: Schema.Types.ObjectId,
    ref: "Project"
  } 
  ],
  students: [{
    type: Schema.Types.ObjectId,
    ref: "Student"
}]
});

userSchema.pre('save', function(next) { 
  if(!this.isModified('password'))
    return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if(err)
      return next(err);
      this.password = passwordHash;
    next();
  });
    
});


userSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if(err)
      return cb(err);
      else {
        if(!isMatch) 
          return cb(null, isMatch);
        return cb(null, this);
      }
  })
}

const User = mongoose.model("User", userSchema);

module.exports = User;