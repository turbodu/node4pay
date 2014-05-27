#!/usr/bin/env node
//var debug = require('debug')('generated-express-app');

var http = require('http');
//Get the environment variables we need.
var  ipaddr= process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var app = require('./app');
console.log("Server begin at http://" + ipaddr + ":" + port + "/");
//http.createServer(function (req, res) {
//    var addr = "unknown";
//    var out = "";
//    if (req.headers.hasOwnProperty('x-forwarded-for')) {
//        addr = req.headers['x-forwarded-for'];
//    } else if (req.headers.hasOwnProperty('remote-addr')){
//        addr = req.headers['remote-addr'];
//    }
//
//    if (req.headers.hasOwnProperty('accept')) {
//        if (req.headers['accept'].toLowerCase() == "application/json") {
//            res.writeHead(200, {'Content-Type': 'application/json'});
//            res.end(JSON.stringify({'ip': addr}, null, 4) + "\n");
//            return ;
//        }
//    }
//
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.write("Welcome to Node.js on OpenShift!\n\n");
//    res.end("Your IP address seems to be " + addr + "\n");
//}).listen(port, ipaddr);

//var debug = require('debug')('generated-express-app');



http.createServer(app).listen(port,ipaddr);
//console.log("Server running at http://" + ipaddr + ":" + port + "/");



