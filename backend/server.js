const http = require('http')
const app = require('./app')
const db = require('./api/models/db_connection')

const server = http.createServer(app);

let consts = require('./api/const')



server.listen(consts.PORT, ()=>{
    console.log(`Listening to port: ${consts.PORT}`);

}); 