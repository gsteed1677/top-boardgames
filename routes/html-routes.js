var path = require("path");

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

 
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });


  app.get('/authors', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/author-manager.html'))
  );
 
};

