// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
// var Click = require("./models/click");

var User = require("./models/user");
// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("build"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
var url;

if (process.env.MONGODB_URI) {
  url = process.env.MONGODB_URI;
}
else {
  url = "mongodb://localhost/MERN";
}
mongoose.connect(url);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/build/static/index.html");
});

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
// app.get("/api", function(req, res) {

//   // This GET request will search for the latest clickCount
//   Click.find({}).exec(function(err, doc) {

//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// // This is the route we will send POST requests to save each click.
// // We will call this route the moment the "click" or "reset" button is pressed.
// app.post("/api", function(req, res) {

//   var clickID = req.body.clickID;
//   var clicks = parseInt(req.body.clicks);

//   // Note how this route utilizes the findOneAndUpdate function to update the clickCount
//   // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
//   // If included, Mongoose will create a new document matching the description if one is not found
//   Click.findOneAndUpdate({
//     clickID: clickID
//   }, {
//     $set: {
//       clicks: clicks
//     }
//   }, { upsert: true }).exec(function(err) {

//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Updated Click Count!");
//     }
//   });
// });

app.post("/api/users", function(req, res) {
  console.log("HEHEHEHE>>>>");
  console.log(req.body);
  var data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }


  // Note how this route utilizes the findOneAndUpdate function to update the clickCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  User.findOneAndUpdate({
    email: data.email
  }, data, { upsert: true }).exec(function(err) {
        if (err) {
      console.log(err);
    }
    else {
      console.log("Added Users");
      res.send("Added Users");
    }
  });
});

app.get("/api/users", function(req, res) {

  // This GET request will search for the latest clickCount
  User.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("list?>>>");
      console.log(doc);
      res.send(doc);
    }
  });
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
