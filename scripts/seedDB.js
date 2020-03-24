const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/zoe-database');

const userSeed = [
  {
    username: 'head-teacher-01',
    projects: [],
    students: []
  },

  {
    username: 'head-teacher-02',
    projects: [],
    students: []
  }
];

const projectSeed = [
  {
    projectName: 'Outer Space',
    projectDescription: 'A space project',
    projectCode: 'WT453Z',
    students: [],
    date: Date.now()
  }
];

const studentSeed = [
  {
    firstName: 'Bob',
    lastName: 'Smith'
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Student.remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
