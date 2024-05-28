const db = require("../config/database.js");
const getAllUsers = async () => {
  const users = await db("users").select("*");
  return users;
};

const getUserById = async (id) => {
  const user = await db("users").select("*").where({ user_id: id }).first();
  return user;
};

module.exports = { getAllUsers, getUserById };
