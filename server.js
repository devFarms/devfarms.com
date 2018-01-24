// Requirements
var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.set("port", (process.env.PORT || 3000));

// Data
var characters = [
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        ago: 900,
        forcePoints: 100
    },
    {
        routeName: "kylo",
        name: "Kylo Ren",
        role: "Sith",
        ago: 30,
        forcePoints: 75
    },
    {
        routeName: "han-solo",
        name: "Han Solo",
        role: "Rebel Fighter",
        ago: "Deceased",
        forcePoints: 10
    }
]

// Routes
app.get("/", function(req, res){
    res.render("home");
});

// app.get("/blog", function(req, res){
//     res.render("blog");
// });

// app.get("/kylo", function(req, res){
//     res.json(kylo);
// });

app.get("/:characters", function(req, res){
    
    var chosen = req.params.characters;
    
    // console.log(chosen);

    for(var i=0; i<characters.length; i++){
        if (chosen===characters[i].routeName) {
            res.json(characters[i]);
            return;
        }
    }
    res.send("No character found");
});

// Listener
app.listen(app.get("port"), function(){
    console.log("Server started on port " +app.get("port"))
});