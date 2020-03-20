const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/zoe-database"
);

const userSeed = [
  {
    username: "head-teacher-01",
  },


  {
      username: "head-teacher-02",
  }
];

const projectSeed = [ {
  projectName: "Test Project",
  projectDescription: "fun project description",
  projectCode: "JEB7Y9",
  date: new Date(Date.now())

},

{
    projectName: "Cool Project",
    projectDescription: "cool project description",
    projectCode: "CHE8HN",
    date: new Date(Date.now())

}

]

const studentSeed = [
  {
        firstName: "Henri",
        lastName: "Martin"

      },
      {
        firstName: "Martine",
        lastName: "Thaveau"

      },
      {
        firstName: "Pete",
        lastName: "Parker"

      },
      {
            firstName: "Jean-Luc",
            lastName: "Deydier"
    
          },
          {
            firstName: "Morgan",
            lastName: "Stanley"
    
          },
          {
            firstName: "Frank",
            lastName: "Corry"
    
          }

]



// db.User
//   // .remove({})
//   // .then(() => db.User.collection.insertMany(userSeed))
//   // , {$push: {students:  "5e739246df559d347853c29e"}}, {$push: {students:  "5e739246df559d347853c29f"}} 
//   .findOneAndUpdate({"_id": "5e72bfb42e7584057c0f5228"}, {$push: {projects: "5e7413f3b017e163dceca95a"}})
//   .then(data => {
//     console.log("success!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

  // const id = ObjectId("5e72bfb42e7584057c0f522a")

  db.Project
    // .remove({})
    // .then(() => db.Project.collection.insertMany(projectSeed))
    .findOneAndUpdate({"_id": "5e7413f3b017e163dceca95a"}, {$push: {students: "5e739246df559d347853c29f"}})
    .then(data => {
      console.log("success");
       process.exit(0);
    })

  // db.Student
  //   .remove({})
  //   .then(() => db.Student.collection.insertMany(studentSeed))
  //   .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  //   })
