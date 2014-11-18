var http = require('http');
var express = require('express');

var app = express();
app.set('port', process.env.PORT || 4000);
app.get('/version', function(req, res) {
	console.log('Connection requested');
	res.json(
	{
		version : '1.0.0',
		color : 'green'
	}
	);
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
})