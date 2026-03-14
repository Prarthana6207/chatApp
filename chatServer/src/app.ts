import express = require("express");

const app = express();

app.use(express.json());
app.get("/posts", (req, res) => {
  res.send({ message: "Hello World" });
});
export default app;
