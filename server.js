#!/usr/bin/env node

var http = require("http"),
    url = require("url"),
    ejs = require("ejs"),
    fs = require("fs"),
    os = require("os"),
    staticResource = require("static-resource"),
    port = 8080,
    serverUrl,
    handler,
    favicon;

serverUrl = "http://localhost:" + port + "/";
handler = staticResource.createHandler(fs.realpathSync("./public"));

favicon = fs.realpathSync('./public/favicon.ico');

http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;

    if (path === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(ejs.render(fs.readFileSync("./index.ejs", "utf8"), {
            hostname: os.hostname()
        }));
        res.end();
    } else if (req.method === 'GET' && path === '/favicon.ico') {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(favicon).pipe(res);
    } else {
        if (!handler.handle(path, req, res)) {
            res.writeHead(404);
            res.write("404");
            res.end();
        }
    }
}).listen(port);

console.log("The HTTP server has started at: " + serverUrl);
