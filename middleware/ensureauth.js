const ensureAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({ error: "No authentication" });
  }
};

module.exports = ensureAuthentication;
