const { createServer, port } = require("./server");

const app = createServer();
const server = app.listen(port, () => {
  console.log(`I'm listening at http://localhost:${port}`);
});
