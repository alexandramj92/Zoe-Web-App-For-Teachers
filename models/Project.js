const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectCode: String,
  students: [{
      type: Schema.Types.ObjectId,
      ref: "Student"
  }],
  date: { type: Date, default: Date.now }

});




ProjectSchema.methods.generateCode = function() {
  let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  let numericChar = "0123456789012345678956789";
  
    console.log("Generate Password function is called");
  
    let codelength = 6;
  
    //Value for generatePassword function 
  
    let value = numericChar + uppercaseChar;
    let code= ""; 
  
    for (let i = 0; i < codelength; i++){
        code = code + value.charAt(Math.floor(Math.random() * Math.floor(value.length)));
        this.projectCode = code;
    }
    return this.projectCode;


}


const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;



