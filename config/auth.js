module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      req.isLogged = true;
      return next();
    }
    req.flash("error_msg", "Please log in");
    res.redirect("/users/login");
  },
};
