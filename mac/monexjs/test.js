// var sudo = require('sudo-prompt');
// var options = {
//   name: 'Electron',
//   //icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
// };
// sudo.exec('echo hello', options,
//   function(error, stdout, stderr) {
//     if (error) throw error;
//     console.log('stdout: ' + stdout);
//   }
// );

// your content is into a variable named 'content'
// var fs = require('fs');
// try { 
//   content = "notessss";
//   fs.writeFileSync('/Applications/monexjs/logs/node.mnex', content, 'utf-8'); 
// }
// catch(e) { 
//   alert('Failed to save the file !'); 
// }

var exec = require('child_process').exec;
var coffeeProcess = exec('/Applications/monexjs/mongodb/bin/mongod');

console.log(coffeeProcess.stdout); 

