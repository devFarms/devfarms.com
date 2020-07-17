// Students: Your work is in the front-end.
// Run this server file with node/nodemon, then open public/app.js.

// Get cracking and good luck!

// Dependencies
var express = require("express");

// Initialize Express
var app = express();

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Set the app to listen on port 3000
// app.set("port", (process.env.PORT || 3000));
app.set("port", (80));

app.listen(app.get("port"), function(){
    console.log("Server started on port " +app.get("port"))
});