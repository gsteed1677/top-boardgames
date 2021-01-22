const db = require('../models');

module.exports = (app) => {
  app.get('/api/authors', (req, res) => {
  
    db.Author.findAll({
      include: [db.Post],
    }).then((dbAuthor) => res.json(dbAuthor));
  });

  app.get('/api/authors/:id', (req, res) => {
    
    db.Author.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbAuthor) => res.json(dbAuthor));
  });

  app.post('/api/authors', (req, res) => {
    db.Author.create(req.body).then((dbAuthor) => res.json(dbAuthor));
  });

  app.delete('/api/authors/:id', (req, res) => {
    db.Author.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbAuthor) => res.json(dbAuthor));
  });
};