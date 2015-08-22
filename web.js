require('newrelic');
var morgan = require('morgan');
var express = require('express');
var app = express();
var router = express.Router();
var path    = require("path");
app.use(morgan('combined'));
app.use("/public", express.static(__dirname + '/public'));



var fs = require('fs');
var htmlfile = "index.html";

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
//  response.send(fs.readFileSync('index.html').tostring());
});

app.get('/projects', function(req, res, next) {
    var html = '/public/projects.html';
    res.sendFile(path.join(__dirname + html));
})


//app.use('/', router);
app.use(express.static(__dirname + '/public')); // just added for static files

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
