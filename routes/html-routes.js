var path = require("path");
const { ConnectionError } = require("sequelize/types");
// var router = express.Router()


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get('/',  (req, res) => {
    res.render('index')
  })

  app.get('/signup',  (req, res) => {
    res.render('index')
  })

  app.get('/login',  (req, res) => {
    res.render('index')
  })

  app.get('/contact',  (req, res) => {
    res.render('index')
  })

  app.get('/form',  (req, res) => {
    res.render('index')
  })

  app.get('/recommended',  (req, res) => {
    res.render('index')
  })

  // app.get("/signup", function (req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/users");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  // app.get("/login", function (req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/users");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/users", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/user.html"));
  // });
};