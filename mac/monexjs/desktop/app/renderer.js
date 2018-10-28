var exec = require('child_process').exec;
var os = require("os");
var drive = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"
var log = require('electron-log');
let $ = require('jquery');
const processes = require('child_process');
const processeses = require('child_process');
var isWin = process.platform;
var stringSearcher = require('string-search');
var fs = require('fs');
var opener = require('electron').shell;
const {shell} = require('electron');
const remote = require('electron').remote
 
function getDroidOutput() { 
  return document.getElementById("droid-output");  
}

function getStatus() { 
  return document.getElementById("status");  
}

function appendToDroidOutput(msg) { 
  getDroidOutput().innerHTML += msg; 
  fs.appendFileSync('/Applications/monexjs/logs/applog.mnex', msg);
}

function setStatus(msg) { 
  getStatus().innerHTML = msg; 
};

function getStatusmongo() { 
  return document.getElementById("status-mongo");  
}

function getid(param){
  return document.getElementById(param);
}

function setid(param, msg){
  getid(param).innerHTML = msg;
}

function appendToDroidOutput(msg) { 
  getDroidOutput().innerHTML += msg; 
  // $( "card-box" ).append(msg);
}

function setStatusmongo(msg) { 
  getStatusmongo().innerHTML = msg; 
};

function execsh(shellname, vid){
  exec(drive + "Applications/monexjs/shell/" + shellname + ".sh", (err, stdout, stderr) => {
    if (err) {
      appendToDroidOutput(err);
      return;
    }
    setid(vid , stdout.trim());
  });
}


function startNode() {
  const { exec } = require('child_process');
  if (isWin === 'darwin') {
    var ls = processes.spawn(drive + "Applications/monexjs/shell/nodestart.sh")
    //console.log(ls)
    ls.stdout.on('data', function (res) {
      //appendToDroidOutput('\n' + 'stdout: ' + res + '<br>');
      codeOutput = res.toString().trim();
      if (codeOutput == "started"){
        setStatus('Stop');
        setid('port-node', '9090');
        execsh('returnnodepid', 'pid-node');
        appendToDroidOutput('\n' + 'MonexJS  listening at port 9090' + '<br>');
      }else{
        setStatus('Start');
        //appendToDroidOutput(codeOutput + '<br>');
        fs.appendFileSync('/Applications/monexjs/logs/nodelog.mnex', codeOutput);
        appendToDroidOutput('\n' + 'MonexJS  error starting at port 9090' + '<br>');
      }
    });

    ls.stderr.on('data', function (data) {
      appendToDroidOutput('\n' + 'stderr: ' + data + '<br>');
    });

    ls.on('close', function (code) {
         //  if (code == 0){
         // 	  setStatus('Stop');
         //  }else{
         // 	setStatus('Start ');
         // }
	  });
  }else if(isWin === 'win32'){
    var ls = processes.spawn(drive + "Applications/monexjs/shell/nodestart.bat")
    //console.log(ls)
    ls.stdout.on('data', function (res) {
      appendToDroidOutput('\n' + 'stdout: ' + res + '<br>');
      codeOutput = res.toString().trim();
      if (codeOutput == "started"){
        setStatus('Stop');
        appendToDroidOutput('\n' + 'MonexJS  listening at port 9090' + '<br>');
      }else{
        // setStatus('Start');
      }
    });

    ls.stderr.on('data', function (data) {
      appendToDroidOutput('\n' + 'stderr: ' + data + '<br>');
    });

    ls.on('close', function (code) {
         //  if (code == 0){
         // 	  setStatus('Stop');
         //  }else{
         // 	setStatus('Start ');
         // }
	  });
  }else{
      console.log("unknown os")
  }
}

function stopNode(){
  const { exec } = require('child_process');
  if (isWin === 'darwin') {
    exec(drive + "applications/monexjs/shell/terminate.sh", (err, stdout, stderr) => {
      if (err) {
        appendToDroidOutput(err);
        return;
      }
      codeOutput = stdout.toString().trim();
      if (codeOutput == "closed"){
        setStatus('Start');
        setid('port-node', 'port');
        setid('pid-node', 'pid');
        appendToDroidOutput('\n' + 'MonexJS  closed at port 9090 ' + '<br>');
      }else{
        setStatus('Start');
        appendToDroidOutput("error stoping node");
      }
      // appendToDroidOutput(stdout);
      
    });
  }else if(isWin === 'win32'){
    exec(drive + "applications/monexjs/shell/terminate.bat", (err, stdout, stderr) => {
      if (err) {
        appendToDroidOutput(err);
        return;
      }
      codeOutput = stdout.toString().trim();
      if (codeOutput == "closed"){
        setStatus('Start');
        appendToDroidOutput('\n' + 'MonexJS  closed at port 9090 ' + '<br>');
      }else{
        setStatus('Start');
        appendToDroidOutput("error stoping node");
      }
      // appendToDroidOutput(stdout);
      
    });
  }else{
      console.log("unknown os")
  }
}


function startMongo() {
  const { exec } = require('child_process');
  if (isWin === 'darwin'){
    var ls = processeses.spawn(drive + "Applications/monexjs/shell/startmongo.sh");
    ls.stdout.on('data', function (res) {
        appendToDroidOutput('\n' + 'stdout: ' + res + '<br>');
        codeOutput = res.toString().trim();
        if (codeOutput == "startedrunning"){
            setStatusmongo("Stop");
            setid('port-mongo', '27017');
            appendToDroidOutput('\n' + 'MongoDB Started ' + '<br>');
            execsh('returnmongopid', 'pid-mongo');
        }else{
            appendToDroidOutput("error starting mongodb");
            setStatusmongo("Start")
        }
    });

    ls.stderr.on('data', function (data) {
        appendToDroidOutput('\n' + 'stderr: ' + data + '<br>');
    });

    ls.on('close', function (code) {
        //  if (code == 0){
        // 	  setStatus('Stop');
        //  }else{
        // 	setStatus('Start ');
        // }
    });
  }else if(isWin === 'win32'){
    exec(drive + "Applications/monexjs/shell/startmongo.bat", (err, stdout, stderr) => {
      if (err) {
        appendToDroidOutput(err);
      }
      codeOutput = stdout.toString().trim();
      console.log(codeOutput);
      if (codeOutput == "startedrunning"){
        setStatusmongo("Stop");
        appendToDroidOutput('\n' + 'MongoDB Started ' + '<br>');
      }else{
        appendToDroidOutput("error starting mongodb");
      }
      // appendToDroidOutput(stdout);
      
    });
  }else{
      console.log("unknown os")
  }
}

function stopMongo(){
  const { exec } = require('child_process');
  if (isWin === 'darwin') {
    exec(drive + "Applications/monexjs/shell/stopmongo.sh", (err, stdout, stderr) => {
      if (err) {
        appendToDroidOutput(err);
      }
      codeOutput = stdout.toString().trim();
      if (codeOutput == "closed"){
        setStatusmongo('Start');
        setid('port-mongo', 'port');
        setid('pid-mongo', 'pid');
        appendToDroidOutput('\n' + 'MongoDB Closed ' + '<br>');
      }else{
        setStatusmongo('Start');
        appendToDroidOutput("trying to stop mongo error");
      }
      // appendToDroidOutput(stdout);
      
    });
  }else if(isWin === 'win32'){
    exec(drive + "Applications/monexjs/shell/stopmongo.bat", (err, stdout, stderr) => {
      if (err) {
        appendToDroidOutput(err);
      }
      codeOutput = stdout.toString().trim();
      if (codeOutput == "closed"){
        setStatusmongo('Start');
        appendToDroidOutput('\n' + 'MongoDB Closed ' + '<br>');
      }else{
        setStatusmongo('Start');
        appendToDroidOutput("trying to stop mongo error");
      }
      // appendToDroidOutput(stdout);
      
    });
  }else{
      console.log("unknown os")
  }
}


document.getElementById('status-mongo').addEventListener('click', function(e) {
  if(getStatusmongo().innerHTML == "Start"){
      setStatusmongo('Starting');
      console.log("mongo activated");
      startMongo(); 
  }else if(getStatusmongo().innerHTML == "Stop"){
      setStatusmongo('Stoping');
      stopMongo();
  }
});

document.getElementById('status').addEventListener('click', function(e) {
  if(getStatus().innerHTML == "Start"){
    setStatus('Starting');
    console.log("clicked");  
    startNode(); 
  }else if(getStatus().innerHTML == "Stop"){
      setStatus('Stoping');
      stopNode();
  }
  e.preventDefault();
});

document.getElementById('node-logs').addEventListener('click', function(e){
  shell.openItem('/Applications/monexjs/logs/nodelog.mnex');
})

document.getElementById('mongo-logs').addEventListener('click', function(e){
  shell.openItem('/Applications/monexjs/logs/mongolog.mnex');
})

document.getElementById('go-dir').addEventListener('click', function(e){
  exec('open . /Applications/monexjs/', (err, stdout, stderr) => {
    if (err) {
      appendToDroidOutput(err);
    }
    codeOutput = stdout.toString().trim();  
  });
})

document.getElementById('go-app').addEventListener('click', function(e){
  event.preventDefault();
  opener.openExternal('https://localhost:9090');
})

document.getElementById('go-help').addEventListener('click', function(e){
  event.preventDefault();
  opener.openExternal('https://localhost:9090/help');
})

document.getElementById('go-log').addEventListener('click', function(e){
  shell.openItem('/Applications/monexjs/logs/applog.mnex');
})

document.getElementById('go-quit').addEventListener('click', function(e){
  let w = remote.getCurrentWindow()
  w.close()
})

// document.getElementById('go-shell').addEventListener('click', function(e){
//   //exec('open /Applications/monexjs/mongodb/bin/mongo'); // notice this without a callback..
//   exec(drive + "Applications/monexjs/shell/openmongoshell.sh", (err, stdout, stderr) => {
//     if (err) {
//       appendToDroidOutput(err);
//     }
//     codeOutput = stdout.toString().trim();
//     console.log(codeOutput);
//   });
// })