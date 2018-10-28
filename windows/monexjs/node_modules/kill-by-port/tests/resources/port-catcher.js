'use strict'
const http = require('http')

function tryPort (port) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World\n')
  })
  server.listen(port, '0.0.0.0', () => {
    console.log(JSON.stringify({port}))
  })
  server.on('error', () => {
    tryPort(port + 1)
  })
}

tryPort(8080)

process.on('exit', () => {
  console.log('bye!')
})
process.on('SIGINT', () => {
  process.exit(0)
})

