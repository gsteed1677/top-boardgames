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
  res.sendFile(path.join(__dirname, '../public/blog.html'));
  });

  app.get('/recommended',  (req, res) => {
    res.render('recommended')
  })

    app.get('/about',  (req, res) => {
    res.render('about')

    })
  


 app.get('/cms', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cms.html'));
  });

  // blog route loads blog.html
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });

 // authors route loads author-manager.html
  app.get('/authors', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/author-manager.html'))
  );
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

