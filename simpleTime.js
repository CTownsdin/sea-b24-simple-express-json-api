var express = require('express');
var app = express();
var port = process.env.PORT || 8888;


app.get('/', function (req, res) {
    // res.status(200);
    // res.send(time.toLocaleTimeString());
    var now = new Date();
    res.end('hi the server is responding ' + now.toLocaleTimeString());
});

app.listen(port, function(){
    console.log('simple time: ' + port);
});
