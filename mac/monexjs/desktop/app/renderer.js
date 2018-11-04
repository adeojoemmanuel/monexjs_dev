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
var http = require('http');
 
function getDroidO2utput() { 
  return document.getElementById("droid-output");  
}

function getStatus() { 
  return document.getElementById("status-node");  
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
  var ls = processes.spawn(drive + "Applications/monexjs/shell/nodestart.sh")

  ls.stdout.on('data', function(res){
    console.log(res);
    codeOutput = res.toString().trim();
    console.log(codeOutput);
    if (codeOutput === "started"){
      setStatus('Stop');
      setid('port-node', '9090');
      execsh('returnnodepid', 'pid-node');
      http.get('http://localhost:9090', function (res) {
        //working well no action;
      }).on('error', function(e) {
        setStatus('Start');
      });
      // appendToDroidOutput('\n' + 'MonexJS  listening at port 9090' + '<br>');
    }else{
      http.get('http://localhost:9090', function (res) {
        //working well no action;
      }).on('error', function(e) {
        setStatus('Start');
      });

      fs.appendFileSync('/Applications/monexjs/logs/nodelog.mnex', codeOutput);
      // appendToDroidOutput('\n' + 'MonexJS  error starting at port 9090' + '<br>');
    }
  });

  ls.stderr.on('data', function (data) {
    console.log(data)
    // appendToDroidOutput('\n' + 'stderr: ' + data + '<br>');
  });

  ls.on('close', function (code) {
    console.log(code)
  });
}

function stopNode(){
  const { exec } = require('child_process');
    exec(drive + "applications/monexjs/shell/terminate.sh", (err, stdout, stderr) => {
      if (err) {
        appendToDroidOutput(err);
        return;
      }
      codeOutput = stdout.toString().trim();
      console.log(codeOutput);
      if (codeOutput == "closed"){
        setStatus('Start');
        setid('port-node', 'port');
        setid('pid-node', 'pid');
        appendToDroidOutput('\n' + 'MonexJS  closed at port 9090 ' + '<br>');
      }else{
        setStatus('Start');
        setid('port-node', 'port');
        setid('pid-node', 'pid');
        appendToDroidOutput("error stoping node");
      }
      // appendToDroidOutput(stdout);
      
    });
}


function startMongo() {
  const { exec } = require('child_process');
    var ls = processeses.spawn(drive + "Applications/monexjs/shell/startmongo.sh");
    ls.stdout.on('data', function (res) {
        appendToDroidOutput('\n' + 'stdout: ' + res + '<br>');
        codeOutput = res.toString().trim();
        //if (codeOutput === "2018-11-04T06:36:32.342+0100INETWORK[initandlisten]waitingforconnectionsonport27017"){
        console.log(codeOutput.search("INETWORK[initandlisten]waitingforconnectionsonport27017"));
        // if(codeOutput.search("INETWORK[initandlisten]waitingforconnectionsonport27017") > 0){
            setStatusmongo("Stop");
            setid('port-mongo', '27017');
            appendToDroidOutput('\n' + 'MongoDB Started ' + '<br>');
            execsh('returnmongopid', 'pid-mongo');
        // }
    });

    ls.stderr.on('data', function (data) {
        appendToDroidOutput("error starting mongodb");
        setStatusmongo("Start")
        setid('port-mongo', 'port');
        setid('pid-mongo', 'pid');
        stopMongo();
    });

    ls.on('close', function (code) {
      setStatusmongo("Start")
      setid('port-mongo', 'port');
      setid('pid-mongo', 'pid');
      stopMongo();
        //  if (code == 0){
        // 	  setStatus('Stop');
        //  }else{
        // 	setStatus('Start ');
        // }
    });
}

function stopMongo(){
  const { exec } = require('child_process');
    exec(drive + "Applications/monexjs/shell/stopmongo.sh", (err, stdout, stderr) => {
      if (err) {
        appendToDroidOutput(err);
      }
      codeOutput = stdout.toString().trim();
      // if (codeOutput == "closed"){
        setStatusmongo('Start');
        setid('port-mongo', 'port');
        setid('pid-mongo', 'pid');
        appendToDroidOutput('\n' + 'MongoDB Closed ' + '<br>');
      // }else{
      //   setStatusmongo('Start');
      //   appendToDroidOutput("trying to stop mongo error");
      // }
      // appendToDroidOutput(stdout);
      
    });
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

document.getElementById('status-node').addEventListener('click', function(e) {
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