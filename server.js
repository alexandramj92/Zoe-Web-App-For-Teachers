const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://zoe-database:Luna663!@ds111492.mlab.com:11492/heroku_0dfx273r", {useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => console.log("db connected"))
.catch(err => {"database error " + err});

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
