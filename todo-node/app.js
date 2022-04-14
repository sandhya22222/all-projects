require('dotenv').config();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const webServer = http.createServer(
    (req, res) => {
        // console.log(req.headers);
        console.log("================");
        console.log('hello world');
        console.log(process.env.NAME);
        console.log(process.env.BATCH);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('thbs-type', 'angular');
        res.end('Hello World');
    }
)

webServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})