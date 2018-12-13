const http = require('http')
const express = require('express')
const app = express()
const routes = require('./routes/route');
const port = 9091
const path = require('path')
const bodyparser = require('body-parser')

//create http sever 
const server = http.createServer(app)
//start sever 
server.listen(port,()=>{
    console.log("port started on port "+port )
})
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyparser())
app.use('/api',routes)
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})