const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const model = require(path.resolve(__dirname, 'model', 'index'));
const routerV1 = jsonServer.router(model);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use('/api/v1', routerV1);

const port = process.env.PORT || 1945;

server.listen(port, () => {
  console.log('JSON Server is running');
});
