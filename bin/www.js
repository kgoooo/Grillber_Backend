
const http = require('http');
const app = require('../server/server');

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port)