var express = require("express");
var path = require("path");
var app = express();
const fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/messages", function(req, res){
    res.sendFile(path.join(__dirname + '/public/messages.html'));
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Birthday app has started");
});

app.get('/birthday.mp3', function(req, res) {
  var filePath = "./birthday.mp3";
  var stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  var readStream = fs.createReadStream(filePath);
  // We replaced all the event handlers with a simple call to util.pump()
  readStream.pipe(res);
});
