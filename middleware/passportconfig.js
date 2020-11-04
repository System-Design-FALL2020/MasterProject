const passport = require("passport");
const passportLocal = require("passport-local");
const LocalStrategy = passportLocal.Strategy;
// B Crypt needs to be installed
// Use a VM
passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    async (username, password, done) => {
      // Match user
      const user = await User.findOne({
        where: { username },
      });
      if (!user) {
        done(null, false);
      }

      // Match password
      await bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      done(null, user.get());
    } else {
      done(null, null);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = passport;
