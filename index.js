const express = require("express");
const routes = require("./src/routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log("server listening in port", PORT);
});

module.exports =app