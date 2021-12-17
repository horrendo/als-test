const supertest = require("supertest");
const { createServer, port } = require("./server");
const als = require("./als");

class store {}

test("can initialise als", async () => {
  await als.run(new store(), async () => {
    const app = createServer();
    const server = app.listen(port, () => {
      console.log(`Test server listening on ${port}`);
    });
    try {
      await supertest(server).get("/").expect(200);
    } finally {
      server.close();
    }
  });
});
