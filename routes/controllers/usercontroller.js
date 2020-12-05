const express = require("express");
const axios = require("axios");
const passport = require("../../middleware/passportconfig");
const sequelize = require("../../middleware/databaseconnection");
const User = require("../../models/user");
const userRouter = express.Router();

userRouter.route("/users").get(allUsers).post(createUser);

async function allUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
}

async function createUser(req, res) {
  // let alreadyExists = await User.findOne({ where: { username: req.body.username } });
  // if (alreadyExists) {
  //   res.redirect("/signup");
  // }
  try {
    const result = await sequelize.transaction(async (t) => {
      const user = await User.create(
        {
          username: req.body.username,
          password: req.body.password,
        },
        { transaction: t }
      );
      return user;
    });

    await axios.post("http://localhost:8080/login", { username: result.username, password: result.password });
    passport.authenticate("local", (err, user) => {
      if (err) throw err;
      req.logIn(user, (err) => {
        if (err) throw err;
        res.redirect("/Browse");
      });
    })(req, res);
  } catch (error) {
    req.session.error = 'User with that name already exists.';
    res.redirect('/SignUp');
    //res.json({ error: `${error}` });
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findByPk(req.body.id);
  } catch (error) { }
}

module.exports = userRouter;
