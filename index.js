const express = require("express");
const ctx = require("./context.js");

const app = express();
app.use(ctx.middleware);

app.get("/", (req, res) => {
  console.log(`[${ctx.requestId}] request received`);
  res.send("It works!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
