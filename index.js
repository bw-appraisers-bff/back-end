const port = 5700;
const server = require('./api/server');

server.listen(port, () => console.log(`\n server running on port ${port}`));