var     express     = require("express"),
        app         = express(),
        mongoose    = require("mongoose");



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res){
    res.render("start");
});

app.get("/portfolio", function(req, res){
    res.render("portfolio");
});

app.get("/creations", function(req, res){
    res.render("creations");
});

app.get("/movie", function(req, res){
    res.render("movie");
});

app.get("/clients", function(req, res){
    res.render("clients");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});







app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Navgraphy Server has started!"); 
});