// steps to create json server
// 1 import json server
const jsonServer = require('json-server')
// 2 create server app
const server = jsonServer.create()
// 3 middleware
const middleware = jsonServer.defaults()
// 4 router/path
const router = jsonServer.router("db.json")
// 5 set port Number
const port = 3000||process.env.PORT
// 6 use 3 and 4
server.use(middleware)
server.use(router)
// 7 listen to run server in specific port
server.listen(port, () => {
    console.log(`contact server app started at port ${port}`)});
