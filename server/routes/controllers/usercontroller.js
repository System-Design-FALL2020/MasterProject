const express = require("express");
const sequelize = require("../../middleware/databaseconnection");
const User = require("../../models/user");
const userRouter = express.Router();

userRouter.route("/users").get(allUsers).post(createUser);

async function allUsers(request, response) {
  try {
    const users = await User.findAll();
    response.json(users);
  } catch (error) {
    response.json(error);
  }
}

async function createUser(request, response) {
  try {
    const result = await sequelize.transaction(async (t) => {
      const user = await User.create(
        {
          username: request.body.username,
          password: request.body.password,
        },
        { transaction: t }
      );
      return user;
    });

    response.json(`${result}`)
    // request.logIn(result, (err) => {
    //   if (err) throw new Error("Error at: req.logIn");
    //   console.log("Yay");
    // });
  } catch (error) {
    response.json({ error: `${error}` });
  }
}

async function getUser(request, response) {
  try {
    const user = await User.findByPk(request.body.id);
  } catch (error) {}
}

module.exports = userRouter;
