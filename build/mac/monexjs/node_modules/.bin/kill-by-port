#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))

function printHelp () {
  console.log(`
    usage : kill-by-port --port 8000
  `)
}

if (argv.help) {
  printHelp()
}

if (!argv.port) {
  console.log(`port option is missing`)
  printHelp()
  process.exit(1)
}

require('./index').killByPort(argv.port)
