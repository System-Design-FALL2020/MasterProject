const ensureAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return true;
  } else {
    return false;
  }
};

module.exports = ensureAuthentication;
