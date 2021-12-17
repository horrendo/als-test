const express = require("express");
const als = require("./als");

exports.port = 3000;

exports.createServer = () => {
  const app = express();
  app.get("/", (req, res) => {
    const rc = als.getStore() === undefined ? 201 : 200;
    res.status(rc).send("Hello World!");
  });
  return app;
}
