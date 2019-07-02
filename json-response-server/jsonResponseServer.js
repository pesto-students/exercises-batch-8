
const http = require('http');

const jsonResponseServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ data: 'Pesto Bootcamp!' }));
  res.end();
}).listen(3000);

jsonResponseServer.close();

export { jsonResponseServer };
