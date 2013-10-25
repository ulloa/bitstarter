require('graphdat');
var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var htmlfile = "index.html";
//var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
//  response.send(fs.readFileSync('index.html').tostring());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
