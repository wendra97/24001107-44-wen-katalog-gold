const db = require("../config/database.js");

const getAllUsers = async () => {
  const users = await db("users").select("*");
  return users;
};

const getUserById = async (id) => {
  const user = await db("users").select("*").where({ user_id: id }).first();
  return user;
};

const addUser = async (name, email, username, password) => {
  const user = await db("users").insert(
    {
      name: name,
      email: email,
      username: username,
      password: password,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    ["name", "email", "username", "password"]
  );
  return user;
};

const updateUser = async (id, name, email, username, password) => {
  const user = await db("users").where({ user_id: id }).update(
    {
      name: name,
      email: email,
      username: username,
      password: password,
      updated_at: new Date().toISOString(),
    },
    ["name", "email", "username", "password"]
  );
  return user;
};

const deleteUser = async (id) => {
  const user = await db("users").where({ user_id: id }).del();
  return user;
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
