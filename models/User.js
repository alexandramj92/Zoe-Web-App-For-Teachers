const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
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

const User = mongoose.model("User", userSchema);

module.exports = User;