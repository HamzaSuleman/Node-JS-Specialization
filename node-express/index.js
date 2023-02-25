const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishesRouter = require('./routes/dishes/dishesRouter');
const dishRouter = require('./routes/dishes/dishRouter');


const hostname = "localhost";
const port = 3000;

const app = express();

//To log each request on console.
app.use(morgan('dev'));
//To access public folder else it will not access.
app.use(express.static(__dirname+"/public"))
//To parse post and put body to json
app.use(bodyParser.json());
app.use('/dishes', dishesRouter);
app.use('/dishes', dishRouter);

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}`)
})
