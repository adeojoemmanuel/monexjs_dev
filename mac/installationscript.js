var sudo = require('sudo-prompt');
var os = require("os");
var path = require('path');
var drive = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"
var  execute   = require('child_process').exec;
var directory = __dirname;
var options = {
  name: 'Electron',
  //icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
};
sudo.exec('chmod 755 installation.sh', options, function(error, stdout, stderr) {
    if (error){
         console.log( error );
    }
    console.log(stdout);
    execute(directory + "/installation.sh", (err, stdout, stderr) => {
        if (err) {
          console.log(err);
        }
        codeOutput = stdout.toString().trim();
        console.log(stdout);
    });
});


    