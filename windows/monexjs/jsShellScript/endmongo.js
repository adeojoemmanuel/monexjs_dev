'use strict'
const exec = require('child_process').execSync;
const find = require('find-process');
var processId = null;
var port= 27017;
try {
  find('port', port).then(function (list) {
    if (!list.length) {
      console.log('error stoping on port 27017');
    } else {
      processId = list[0].pid;
      if(exec(`taskkill /PID  ${processId}  /T /F`)){
        console.log("closed");
      }else{
        console.log("didnt find pid");
      }
    }
  })
} catch (e) {
    console.log("could not catch");
}
