const express = require("express");
const userRouter = require("./controllers/usercontroller");
const axios = require("axios");

const ensureAuthentication = require("../middleware/ensureAuthentication");
const { route } = require("./controllers/usercontroller");

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

router.get("/SignUp", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "SignUp"
  });
});

router.get("/Shop", (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/games',
    headers: {
      'x-rapidapi-key': '80f34a6ef3mshf579f852cc2cd74p1de947jsn4a7a117cb73e',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    let arr = response.data.results;
    //console.log(response);
    res.render("index.ejs", {
      layout: "layouts/standardlayout.ejs",
      title: "Shop",
      games: arr
    });
  }).catch(function (error) {
    res.send(error);
  });
  // res.sendFile('/views/login/login.html', { root: 'public'});
});

router.get("/About", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "About",
  });
  // res.sendFile('/views/login/login.html', { root: 'public'});
});

router.get("/Cart", (req, res) => {
  res.render("index.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Cart",
  });
});

// router.get("/Cart", async (req, res) => {
//   var user = { id: 1 };
//   var cart = await Cart.findOne({
//     where: {
//       user: user.id,
//     },
//   });
//   var cartItems = await CartItem.findAll({
//     where: {
//       cart: cart,
//     },
//   });
//   for (var i = 0; i < cartItems.length; i++) {
//     var prod = await Product.findByPk(cartItems[i].product);
//     cartItems[i].name = prod.name;
//     cartItems[i].price = prod.price;
//   }
//   res.render("index.ejs", {
//     layout: "layouts/standardlayout.ejs",
//     title: "Cart",
//     cartItems: cartItems,
//   });
//   // res.sendFile('/views/login/login.html', { root: 'public'});
// });

module.exports = router;
