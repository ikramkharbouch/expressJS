const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello there</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server already started on", PORT));
