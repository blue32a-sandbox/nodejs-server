const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
  console.log(`Request URL : ${request.url}`);

  const responseMessage = "<h1>Hello World</h1>";
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.end(responseMessage);

  console.log(`Sent a response : ${responseMessage}`);
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
