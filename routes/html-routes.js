var path = require("path");
// var router = express.Router()


// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get('/',  (req, res) => {
    res.render('index')
  })

  app.get('/signup',  (req, res) => {
    res.render('signup')
  })

  app.get('/login',  (req, res) => {
    res.render('login')
  })

  app.get('/contact',  (req, res) => {
    res.render('contact')
  })

  app.get('/forum',  (req, res) => {
    res.render('forum')
  })

  app.get('/recommended',  (req, res) => {
    res.render('recommended')
  })

    app.get('/about',  (req, res) => {
    res.render('about')
  })
  
    app.get('/user',  (req, res) => {
    res.render('user')
  })
}