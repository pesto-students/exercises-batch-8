
const http = require('http');

const httpServer = {
  server: null,
  createOwnServer: () => {
    if (httpServer.server === null) {
      httpServer.server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Pesto Bootcamp!\n');
      });
    }
  },
  listen: (port) => {
    if (!httpServer.server) {
      httpServer.createOwnServer();
    }
    const hostname = '127.0.0.1';
    httpServer.server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  },
  close: () => {
    httpServer.server.close();
  },
};


export {
  httpServer,
};
