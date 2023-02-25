const express = require('express');
const http = require('http');
const morgan = require('morgan');

const  dishRouter  = require('./routes/dishRouter');
const  promotionRouter = require('./routes/promotionRouter');
const  leaderRouter  = require('./routes/leaderRouter');

const hostname = "localhost";
const port = 3000;
const app = express();

//To log each request on console.
app.use(morgan('dev'));
//To access public folder else it will not access.
app.use(express.static(__dirname+"/public"))
//To parse post and put body to json

//Routers
app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);


const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}`)
})
