const express = require("express");
const app = express();
const port = 8080;
const usersRouter = require("./routes/users-route.js");
const cataloguesRouter = require("./routes/catalogues-route.js");

app.use(usersRouter, cataloguesRouter);

app.get("/", (req, res) => {
  res.redirect("/catalogues");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
