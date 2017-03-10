var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create the proxy server and set the target in options
//
httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000);

//
// Create the target server
//
http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
   res.end();
}).listen(9000);
