const express = require("express");
const userRouter = require("./controllers/usercontroller");
const axios = require("axios");
const passport = require('../middleware/passportconfig');
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
    authenticated: req.isAuthenticated()
  });
});

router.get("/Creators", (req, res) => {
  res.render("creators.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Creators",
    authenticated: req.isAuthenticated()
  });
});

router.get("/Browse", (req, res) => {
  res.render("browse.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Browse",
    authenticated: req.isAuthenticated()
  });
});

router.get("/Login", (req, res) => {
  let message = req.session.error;
  req.session.error = null;
  res.render("login.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Login",
    message: message,
    authenticated: req.isAuthenticated()
  });

});

router.post(
  "/login",
  (req, res, next) => {
    passport.authenticate("local", (err, user) => {
      if (err) throw err;
      if (!user) {
        req.session.error = 'Invalid Username or Password.';
        res.redirect('/Login');
      } else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.redirect("/Browse");
        });
      }
    })(req, res, next);
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/Home");
});

router.get("/SignUp", (req, res) => {
  let message = req.session.error;
  req.session.error = null;
  res.render("signup.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "SignUp",
    message: message,
    authenticated: req.isAuthenticated()
  });
  req.session.error = null;
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
    res.render("index.ejs", {
      layout: "layouts/standardlayout.ejs",
      title: "Shop",
      authenticated: req.isAuthenticated(),
      games: arr
    });
  }).catch(function (error) {
    res.send(error);
  });
});

router.get("/About", (req, res) => {
  res.render("about.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "About",
    authenticated: req.isAuthenticated()
  });
});

router.get("/Cart", (req, res) => {
  res.render("cart.ejs", {
    layout: "layouts/standardlayout.ejs",
    title: "Cart",
    authenticated: req.isAuthenticated()
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
