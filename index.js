const express = require("express");
const app = express();
const port = 8080;
const usersRouter = require("./routes/users-route.js");

app.use(usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
