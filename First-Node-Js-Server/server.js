// Create First Node JS Server.
// Importing the requiered libreries.
// importing http from System (it dosen't need to install externally).
const http = require('http');

// define a port
const port = 1337;// for know we will use the port 1337

// define the server which is an object from http 
/* createServer() function will use a function as an argument, and will pass inside it 
    two parameters, which are request and response, to handel with inside the function.
*/ 
const server = http.createServer(function(request, response){
    // here we can read the request, and set the response
    response.statusCode = 200; // we set 200 status for the response.
    response.setHeader('Content-Type', 'text/plain');// the response should pe as a text
    response.end('Hello World From Node JS');// sending the response
});

// run the server listener method, we should pass the port in the first position argument
// we can pass a function next argument to do some actions when the server start listening. 
server.listen(port, function(){
    console.log(`The server is listening to port: ${port}`);
});
