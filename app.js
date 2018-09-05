const http = require('http');
const fs = require('fs');
const url = require('url');

const configApp = require('./config/app.js')
const generic_func = require('./helpers/generic_func');

const server = http.createServer(generic_func.onRequest);

server.listen(configApp.port, configApp.hostname, () => {
  console.log(`Server running at http://${configApp.hostname}:${configApp.port}/`);
});