var express = require('express');
var path = require('path');
var app = express();
//var router = express.Router();   no router this time, will do later
var port = process.env.PORT || 8888;
module.exports = app;


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// GET
app.get('/', function (req, res) {
    res.send('hello world, this is root');
});

app.get('/whattimeisit', function (req, res) {
    res.status(200);
    var now = new Date();
    //res.end('The time is ' + now.toLocaleTimeString());
    var timeObj = {
        time: now,
        hr: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds()
    };
    res.json(timeObj);
});

app.get('/greetings', function (req, res) {
    //res.send('hello world');
    var data = { msg: 'greetings!' };
    res.json(data);
});

// POST
// a route that greets the name from the Url
// by sending a JSON object response { 'msg': 'Hello James!' }
app.post('/greetwithobject/:name', function (req, res) {
    var name = req.params.name.slice(1);    // slice off ^:
    name = name.charAt(0).toUpperCase() + name.substring(1);
    console.log('Srv is saying: Hello ' + name);

    var dataObj = { msg: 'Hello ' + name + '!' };
    res.json( dataObj );
});

// ERROR
// 404 catch all
app.use(function(req, res, next){
    res.send(404, 'Sorry can not find that!');
});

// basic error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

// listen, start it up :) !
app.listen(port, function () {
    console.log('Server started on port', port);
});
