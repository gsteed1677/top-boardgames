var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/users");
    }
    res.sendFile(path.join(__dirname, "../public/signup.handlebars"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/users");
    }
    res.sendFile(path.join(__dirname, "../public/login.handlebars"));
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/users", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/user.handlebars"));
  });
};