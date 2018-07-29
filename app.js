var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/messages", function(req, res){
    res.sendFile(path.join(__dirname + '/public/messages.html'));
});

app.listen(3000, process.env.IP, function(){
    console.log("Birthday app has started");
});
