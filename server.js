var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var hello = require('./popup');
var url = require('url');

function start(route) {
	var app = express.createServer(express.logger());

	app.get('/', function(request, response) {
		var html = fs.readFileSync(htmlfile).toString();
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(pathname);
		response.send(html);
	});

	var port = process.env.PORT || 8080;
	app.listen(port, function() {
		console.log("Listening on " + port);
	});
}

exports.start = start;
