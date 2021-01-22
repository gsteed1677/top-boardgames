//Requiring our models
const db = require('../models');
//Routes
module.exports = (app) => {
  app.get('/api/posts', (req, res) => {
    const query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    db.Post.findAll({
      where: query,
      include: [db.Author],
    }).then((dbPost) => res.json(dbPost));
  });

  //Get route for retrieving a single post
  app.get('/api/posts/:id', (req, res) => {
  
    db.Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Author],
    }).then((dbPost) => res.json(dbPost));
  });

  //POST route for saving a new post
  app.post('/api/posts', (req, res) => {
    db.Post.create(req.body).then((dbPost) => res.json(dbPost));
  });

  //DELETE Route for deleting posts
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });

  //PUT route for updating posts
  app.put('/api/posts', (req, res) => {
    db.Post.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
};
