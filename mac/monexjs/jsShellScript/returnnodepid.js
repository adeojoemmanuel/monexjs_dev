#!/usr/bin/env node

'use strict'
const exec = require('child_process').execSync;
function pid(port) {
  var processId = null
  try {
    processId = exec(`lsof -t -i:${port}`);
    console.log(processId.toString());
  } catch (e) {
  		console.log("could not catch");
  }
}

pid(9090); 
