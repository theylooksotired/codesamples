var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var N3Store = require('n3').Store;
var http = require('http');
var requestModule = require('request');
var rp = require('request-promise');
var app = express();

// Global variables
var hostServer = 'http://localhost';
var portListen = 3000;

// Configure App and CROS
app.use(bodyParser.json({ type: 'json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// Start the server in the port "portListen"
var server = app.listen(portListen, function () {
	var host = server.address().address;
	var port = server.address().port;
})


/*---GET operations---*/

// Return a simple HTML string
app.get('/html', function(request, response, next) {
    response.writeHead(200, {"Content-Type": "text/html"});
    var htmlCode = `<h1>Title</h1>
    				<p>Lorem ipsum.</p>`;
	response.end(htmlCode);
    return true;
});

// Return a simple HTML string with a variable
app.get('/html/:code', function(request, response, next) {
    response.writeHead(200, {"Content-Type": "text/html"});
    var htmlCode = `<h1>Title ` + request.params.code + `</h1>
    				<p>Lorem ipsum.</p>`;
	response.end(htmlCode);
    return true;
});

// Return a simple JSON object
app.get('/json', function(request, response, next) {
    response.writeHead(200, {"Content-Type": "application/json"});
    var json = {
    			"data" : {
				        "title" : "Title Data",
						"info" : {
				            "sample": "sampleData",
				        }
				    }
				}
    response.end(JSON.stringify(json));
    return true;
});


/*---POST operations---*/

// Simple POST request with some values
app.post('/post', function(request, response, next) {
	postValues = {'name' : request.body.name,
				'email' : request.body.email,
				'password' : request.body.password};
	response.writeHead(200, {"Content-Type": "application/json"});
    var json = {
    			"name" : postValues.name,
    			"email" : postValues.email,
    			"password" : postValues.password
				}
    response.end(JSON.stringify(json));
});

// Mixed GET and POST request with some values
app.post('/postGet/:varGet1/:varGet2', function(request, response, next) {
	response.writeHead(200, {"Content-Type": "text/html"});
    var htmlCode = `<h1>Title ` + request.params.varGet1 + ` ` + request.params.varGet2 + `</h1>
    				<p>Lorem ipsum.</p>
    				<p>Post: ` + request.body.name + `</p>`;
	response.end(htmlCode);
});


/*---GET, POST, PUT by default---*/
app.all('/*', function(request, response, next) {
    response.end("Hello there!");
});