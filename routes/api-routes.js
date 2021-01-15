var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
//use passport to authenticate with the local strategy - push error if given bad login paramaters
  
  app.post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

 
  app.post("/signup", function (req, res) {
    db.User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
      user_dob: req.body.user_dob,
    })
      .then(function () {
        res.redirect(307, "/login");
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });


  
}
