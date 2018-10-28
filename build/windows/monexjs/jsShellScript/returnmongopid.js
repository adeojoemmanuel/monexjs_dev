'use strict'
const exec = require('child_process').execSync;
function pid(port) {
  var processId = null
  try {
    processId = exec(`$($(netstat -aon | findstr ${port})[0] -split '\s+')[-1]`);
    console.log(processId.toString());
  } catch (e) {
  		console.log("could not catch");
  }
}

pid(27017); 

