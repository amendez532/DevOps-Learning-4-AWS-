const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js running in EKS!');
});
server.listen(3000);
