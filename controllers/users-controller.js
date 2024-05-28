const usersModel = require("../models/users-model.js");

const getAllUsers = async (req, res) => {
  const users = await usersModel.getAllUsers();
  return res.status(200).json({ data: users });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersModel.getUserById(id);
  return res.status(200).json({ data: user });
};

module.exports = { getAllUsers, getUserById };
