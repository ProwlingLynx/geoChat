const path = require('path');
const server = require('./server.ts');

const port:number = 3000;

server.listen(port, () => {
  console.log(`Listening to port: ${port}.`);
});