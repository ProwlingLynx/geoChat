const server = require('../server/server.ts');

test('Should be an object', ()=> {
  expect(server).toBeTruthy();
});