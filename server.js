var http = require('http');

const PORT=8080; 

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

http.createServer(handleRequest).listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});