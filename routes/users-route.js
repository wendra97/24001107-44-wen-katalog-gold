const express = require("express");
const methodOverride = require("method-override");
const router = express.Router();
const usersController = require("../controllers/users-controller.js");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
router.get("/users", usersController.getAllUsers);
router.get("/users/add", usersController.getAddUserForm);
router.get("/users/:id", usersController.getUserById);
router.post("/users/add", usersController.addUser);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/delete/:id", usersController.deleteUser);
router.get("/users/edit/:id", usersController.getUserById);
router.put("/users/edit/:id", usersController.updateUser);

module.exports = router;
