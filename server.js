var express = require('express');
var app = express();
var middleware = require('./middleware.js');

app.get('/about', function(req, res) {
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));
app.use(middleware.requireAuthentication);
app.use(middleware.logger);

var port = 3000;
app.listen(port, function() {
    console.log('Express server started on port ' + port);
});