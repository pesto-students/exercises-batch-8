const http = require('http');

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text' });
  res.write('Pesto Bootcamp!\n');
  res.on('data', data => console.log(data));
  res.end();
}).listen(3000);


export { httpServer };