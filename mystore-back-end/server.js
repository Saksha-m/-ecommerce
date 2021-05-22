const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000 || 3001 || 2019;

const server = http.createServer(app);

server.listen(port);