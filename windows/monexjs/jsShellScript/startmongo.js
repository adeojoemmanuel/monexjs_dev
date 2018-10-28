'use strict'
const fs = require('fs');
const { exec } = require('child_process');
var os = require("os");
var path = require('path');
var drive = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"

function startmongo() {
	if (exec(`cd / &&  /monexjs/mongodb/bin/mongod`, (err, stdout, stderr) => {
		fs.appendFileSync(drive + '/monexjs/logs/mongolog.mnex', stdout);
		fs.appendFileSync(drive + '/monexjs/logs/mongolog.mnex', err);
		fs.appendFileSync(drive + '/monexjs/logs/mongolog.mnex', stderr);
	})) { 
		console.log("startedrunning");
		return;
	}else{
		console.log("process is null");
	}
}

startmongo(); 
