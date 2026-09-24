const userService = require("../services/userService");

//GET all users
const getUsers = (req,res) => {
  const users = userService.getUsers();

  res.json(users);
}

//Create a user
const createUser = (req,res) => {
  const user = userService.createUser(req.body);
  res.json({
    message: "User created successfully",
    user: user
  });
};

module.exports = {
  getUsers,
  createUser
};

