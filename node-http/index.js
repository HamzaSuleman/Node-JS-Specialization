const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            if (fs.existsSync(filePath)) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            }
            else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<html><body><h1>Error 404: ' + fileUrl +
                    ' not does not exists.. </h1></body></html>');
            }
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl +
                ' not a HTML file</h1></body></html>');
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method +
            ' not supported</h1></body></html>');
    }

    //res.statusCode = 200;
    // res.setHeader('content-type', "text/html");
    // res.end("<html><body><h1>Hamza Suleman</h1></body></html>");




    //res.setHeader('content-type', "application/json");
    //provide json an id if any object is similar it might crash the api.
    //res.end(`[{"id": "0", "name": "Omar Suleman" },{"id": "1", "name": "Hamza Suleman" },{"id": "2", "name": "Taha Suleman" }]`);

});

const listening = server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port} `);
})