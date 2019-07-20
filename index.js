server = require('./api/server');

const port = process.env.PORT || 9393

server.listen(port, () => {
  console.log(`Port ${port} is now in use`)
});