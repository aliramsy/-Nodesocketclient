const websocket = require("ws")
const jwt = require('jsonwebtoken')

//creating token
const token = jwt.sign({name:'abcd'},'secret-key',{
    expiresIn : 5
})
const tokenheader = {
    headers : {
        token: token
    }}
//console.log(token)

//connecting to the server
const serveraddress = "ws://127.0.0.1:8080"
const ws = new websocket(serveraddress)

//sending token to the server to verify
ws.on("open",function open() {
    const header = "header"
    const data = header
    newdata = JSON.stringify(tokenheader)
    ws.send(newdata)
})

//receiving data from the server
ws.on("message",function message(data){
    stringdata = data.toString()
    console.log(stringdata)
})