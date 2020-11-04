const express = require("express");
const userRouter = require("./controllers/usercontroller");

const Product = require("../models/product");
const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");

const router = express.Router();

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

router.get("/Shop", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Shop",
  });
  // res.sendFile('/views/login/login.html', { root: 'public'});
});

router.get("/Cart", async (req, res) => {
  var user = { id: 1 };
  var cart = await Cart.findOne({
    where: {
      user: user.id,
    },
  });
  var cartItems = await CartItem.findAll({
    where: {
      cart: cart,
    },
  });
  for (var i = 0; i < cartItems.length; i++) {
    var prod = await Product.findByPk(cartItems[i].product);
    cartItems[i].name = prod.name;
    cartItems[i].price = prod.price;
  }
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Cart",
    cartItems: cartItems,
  });
  // res.sendFile('/views/login/login.html', { root: 'public'});
});

module.exports = router;
