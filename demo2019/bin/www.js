const http = require('http');
const serverHandle = require('../app');
const PORT = 8080;
const servers = http.createServer(serverHandle);
servers.listen(PORT);