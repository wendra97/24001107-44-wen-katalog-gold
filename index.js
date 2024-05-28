const express = require("express");
const app = express();
const port = 8080;
const db = require("./config/database");
const usersRouter = require("./routes/users-route.js");

app.use(express.json());
app.use(usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", async (req, res) => {
  const { name, email, username, password } = req.body;
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  const user = await db("users").insert(
    {
      name: name,
      email: email,
      username: username,
      password: password,
      created_at: createdAt,
      updated_at: updatedAt,
    },
    ["name", "email", "username", "password"]
  );
  return res.json({ message: "User successfully created", data: user });
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, username, password } = req.body;
  const updatedAt = new Date().toISOString();
  const user = await db("users").where({ user_id: id }).update(
    {
      name: name,
      email: email,
      username: username,
      password: password,
      updated_at: updatedAt,
    },
    ["name", "email", "username", "password"]
  );
  return res.json({ message: "User successfully updated", data: user });
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await db("users").where({ user_id: id }).del();
  return res.json({ message: `User ${id} successfully deleted` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
