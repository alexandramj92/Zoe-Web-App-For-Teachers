const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  students: [{
      type: Schema.Types.ObjectId,
      ref: "Student"
  }],
  date: { type: Date, default: Date.now }

});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;