const jsonServer = require('json-server');

const data = require('./data')();

const server = jsonServer.create();
const router = jsonServer.router(data.data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use('/api', router);

server.listen(5002, () => {
  console.log('JSON Server is running');
});
