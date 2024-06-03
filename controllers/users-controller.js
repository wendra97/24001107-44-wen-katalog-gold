const express = require("express");
const app = express();
const usersModel = require("../models/users-model.js");

app.set("view engine", "ejs");

const getAllUsers = async (req, res) => {
  const titleIcon = `data:image/svg+xml,<svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='white'
    class='bi bi-people-fill'
    viewBox='0 0 16 16'>
    <path
      d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5'
    />
    </svg>`;
  const users = await usersModel.getAllUsers();
  return res.status(200).render("../views/user/users-view.ejs", {
    users: users,
    titleIcon,
    title: "User List",
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const endPointUrl = req.originalUrl.split("/").slice(0, -1).join("/");
  const user = await usersModel.getUserById(id);
  if (endPointUrl == "/users/edit") {
    const titleIcon = `data:image/svg+xml,<svg 
    xmlns='http://www.w3.org/2000/svg' 
    width='16' 
    height='16' 
    fill='white' 
    class='bi bi-person-gear' 
    viewBox='0 0 16 16'>
    <path 
      d='M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0'
    />
    </svg>`;
    return res.status(200).render("../views/user/users-edit.ejs", {
      user: user,
      titleIcon,
      title: "Edit User",
    });
  }
  //return res.status(200).json({ data: user });
};

const getAddUserForm = async (req, res) => {
  const titleIcon = `data:image/svg+xml,<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="16" 
  height="16" 
  fill="white" 
  class="bi bi-person-fill-add" 
  viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
  </svg>`;
  return res.status(200).render("../views/user/users-add.ejs", {
    titleIcon,
    title: "Add User",
  });
};

const addUser = async (req, res) => {
  const { name, email, username, password } = req.body;
  const user = await usersModel.addUser(name, email, username, password);
  return res.status(200).json({
    message: "User successfully added",
    data: user,
    redirect: true,
    redirectUrl: "/users",
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, username, password } = req.body;
  const user = await usersModel.updateUser(id, name, email, username, password);
  return res.status(200).json({
    message: "User successfully updated",
    data: user,
    redirect: true,
    redirectUrl: "/users",
  });
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.deleteUser(id); // Adjust to your deletion logic
    res.status(200).json({
      message: `User ${id} successfully deleted`,
      redirect: true,
      redirectUrl: "/users",
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getAddUserForm,
};
