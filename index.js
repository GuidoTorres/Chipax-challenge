const express = require("express");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log("server listening in port", PORT);
});

module.exports =app