const express = require('express');
const http = require('http');
const morgan = require('morgan');


const hostname = "localhost";
const port = 3000;

const app = express();

//To log each request on console.
app.use(morgan('dev'));

//To access public folder else it will no access.
app.use(express.static(__dirname+"/public"))


app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('content-type', "text/html");
    //res.end("<html><head><title>Express Server</title></head> <body> This is Hamza Express Server </body></html>");
})

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}`)
})
