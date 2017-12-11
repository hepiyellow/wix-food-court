import server from '../src/server';

const app = server();
let httpServer;
export const beforeAndAfter = (port = 3100) => {
  before(() => new Promise(resolve => httpServer = app.listen(port, resolve)));
  after(() => httpServer.close);
};
