const express = require("express");
const userRouter = require("./controllers/usercontroller");

const router = express.Router();

router.use(userRouter);

router.get("/", (req, res) => {
  res.redirect("/Home");
});

router.get("/Home", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Home",
  });
  // res.sendFile('/views/home/index.html', { root: 'public'});
});

router.get("/Browse", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Browse",
  });
  // res.sendFile('/views/browse/browse.html', { root: 'public'});
});

router.get("/Login", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Login",
  });
  // res.sendFile('/views/login/login.html', { root: 'public'});
});

router.get("/Cart", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Cart",
  });
});
  // res.sendFile('/views/cart/cart.html', { root: 'public'});

module.exports = router;
