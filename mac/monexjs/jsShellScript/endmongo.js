'use strict'
const exec = require('child_process').execSync;
function killport(port) {
  var processId = null
  try {
    processId = exec(`lsof -t -i:${port}`);
  } catch (e) {
  		console.log("could not catch");
  }
  if (processId !== null) { // if exists kill
  	try{
	    	if(exec(`kill ${processId}`)){
					console.log("closed");
				}
	    } catch(e){
			console.log("error executing");
  	}
  }
}

killport(27017); 
