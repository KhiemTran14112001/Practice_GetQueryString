let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer((req, res) => {
    let parseUrl = url.parse(req.url);
    let queryStringObject = parseUrl.query;
    res.end('Hello Node JS');
    // console.log(queryStringObject);
    console.log(parseUrl)
});

server.listen(3000, () => {
    console.log('the server is listening on port 3000 now');
});