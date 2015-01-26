module.exports = function(app) {
  var express = require('express');
  var reviewsRouter = express.Router();

  reviewsRouter.get('/', function(req, res) {
    res.send({
      "reviews": []
    });
  });

  reviewsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  reviewsRouter.get('/:id', function(req, res) {
    res.send({
      "reviews": {
        "id": req.params.id
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
