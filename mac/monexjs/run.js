#!/usr/bin/env node

var express = require('express');
var isWin = process.platform;
var app = express();
var serveer = require('http').createServer(app);
var path = require('path');
var os = require("os");
var drive = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"
var routes = require(drive + 'Applications/monexjs/routes/index');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var net = require('net');
var servercheck = net.createServer();
const detect = require('detect-port');
const fs = require('fs');

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, drive + 'Applications/monexjs/admin/views'));



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, drive + 'Applications/monexjs/admin')));
app.use("/node_modules", express.static(__dirname + drive + "Applications/monexjs/admin/node_modules"));


app.use(express.static(drive + 'Applications/monexjs/admin'));
app.use('/', routes);
app.use('/login', routes);
app.use('/default', routes);
app.use('/admin', routes);
app.use('//main/mainView', routes);
app.use('/dashboard', routes);
app.use('/main/mainView', routes);
app.use('/main/collections', routes);
app.use('/main', routes);
app.use('/header', routes);
app.use('/help', routes);
app.use('/collection', routes);
app.use('/viewcollection', routes);
app.use('/dropDB', routes);
app.use('/addDB', routes);
app.use('/addcollection', routes);
app.use('/dropcollection', routes);
app.use('/insertData', routes);
app.use('/dropData', routes);
app.use('/main/main/collections/:data', routes);
app.use('/:projectname', routes);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('c:/monex/505.html', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('c:/monex/505.html', {
//     message: err.message,
//     error: {}
//   });
// });

app.use(function(req, res, next){
  res.render(drive + 'Applications/monexjs/404.html', { status: 404, url: req.url });
});

app.use(function (err, req, res, next) {
  res.render(drive + 'Applications/monexjs/505.html', { status: 500, url: req.url });
});

// // watch and reload server

// var gulp = require('gulp');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
// var nodemon = require('gulp-nodemon');


// gulp.task('browser-sync', ['nodemon'], function() {
//     browserSync.init(null, {
//         proxy: "http://localhost:9090", // port of node server
//     });
// });

// gulp.task('default', ['browser-sync'], function () {
//     gulp.watch(["c:/monex/admin/*.html"], reload);
// });

// gulp.task('nodemon', function (cb) {
//     var callbackCalled = false;
//     return nodemon({script: './run.js'}).on('start', function () {
//         if (!callbackCalled) {
//             callbackCalled = true;
//             cb();
//         }
//     });
// });




// app.use(function(req, res, next){
//     res.status(404).render('404', {title: "Sorry, page not found"});
// });

// run on your browser through http://localhost:9090
port = 9090;
    detect(port, (err, _port) => {
    if (err) {
        console.log(err);
    }else if (port == _port) {
        var server = serveer.listen(9090, function () {
            // server.setTimeout(10*60*1000);
            var host = server.address().address
            var port = server.address().port
            // console.log("MonexJS  listening at", port)
            console.log("started");
        })
        module.exports = server;
    } else {
    console.log(`port: ${port} was occupied, try port: ${_port}`);
    fs.appendFileSync('/Applications/monexjs/logs/node.mnex', `port: ${port} was occupied, try port: ${_port}`);
    }
});


	

	