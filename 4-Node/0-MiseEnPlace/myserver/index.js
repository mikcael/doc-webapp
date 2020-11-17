var express = require('express');

var app = express();

// Configure routes
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Hello !!!</h1>');
});

// Configure routes
app.get('/config', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify('./package.json'));
});


// Launch server
app.listen(8080, function(){
    console.log('Server start');
});