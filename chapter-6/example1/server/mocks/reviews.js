module.exports = function(app) {
  var express = require('express');
  var reviewsRouter = express.Router();

  reviewsRouter.get('/', function(req, res) {
    var reviews = []
    if(req.query.ids){
      req.query.ids.forEach(function(element){
        reviews.push({
          "id": parseInt(element),
          "name": "Reviewer " + element,
          "comment": "comment " + element,
          "books":[1]
        });
      });  
    }
    res.send({
      "reviews": reviews
    });
  });

  reviewsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  reviewsRouter.get('/:id', function(req, res) {
    res.send({
      "reviews": {
        "id": parseInt(req.params.id),
        "name": "Reviewer " + req.params.id,
        "comment": "comment " + req.params.id,
        "books":[1]
      }
    });
  });

  reviewsRouter.put('/:id', function(req, res) {
    res.send({
      "reviews": {
        "id": req.params.id
      }
    });
  });

  reviewsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/reviews', reviewsRouter);
};
