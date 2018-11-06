#!/usr/bin/env node

'use strict'
const util = require('util');
const fs = require('fs');
const exec = require('child_process').exec;
var shell = require('shelljs');

function startmongo() {
	return new Promise((resolve, reject) => {
		if (shell.exec('~/mongodb/bin/mongod').code !== 0) {
		  	shell.echo('started');
  			shell.exit(0);
		}else{
			shell.echo('stoped');
  			shell.exit(1);
		}
	});
}

startmongo(); 
