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

const addUser = async (req, res) => {
  const { name, email, username, password } = req.body;
  const user = await usersModel.addUser(name, email, username, password);
  return res
    .status(200)
    .json({ message: "User successfully created", data: user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, username, password } = req.body;
  const user = await usersModel.updateUser(id, name, email, username, password);
  return res
    .status(200)
    .json({ message: "User successfully updated", data: user });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await usersModel.deleteUser(id);
  return res.status(200).json({ message: `User ${id} successfully deleted` });
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
