import test from 'ava'
const path = require('path')
const childProcess = require('child_process')
const fs = require('fs')

test.cb('process should stop', t => {
  // lets run the process in detached mode
  const portCatcherPath = path.join(__dirname, 'resources', 'port-catcher.js')
  const outFilePath = path.join(__dirname, '..', 'out.log')
  const errFilePath = path.join(__dirname, '..', 'err.log')
  const outFile = fs.openSync(outFilePath, 'w')
  const errFile = fs.openSync(errFilePath, 'w')
  const child = childProcess.spawn('node', [portCatcherPath], {

    stdio: ['ignore', outFile, errFile],
    detached: true
  })
  child.unref()
  // lets wait for output to be written
  // not sure how to read it directly from child.stdio as all return null.
  // http://stackoverflow.com/questions/40319616/how-to-read-output-in-nodejs-from-spawned-child-when-output-is-a-file
  setTimeout(() => {
    const content = fs.readFileSync(outFilePath)
    console.log(`content is ${content}`)
    const runningPort = JSON.parse(content.toString()).port
    const killByPortPath = path.join(__dirname, '..', 'kill-by-port.js')
    childProcess.execSync(`node ${killByPortPath} --port ${runningPort}`)
    require('is-port-busy')(runningPort).then(() => {
      t.end('port is still busy!')
    }, () => {
      t.end() // not busy
    })
  }, 1000)
})
