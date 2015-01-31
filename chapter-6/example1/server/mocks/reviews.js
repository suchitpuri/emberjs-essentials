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
          "book":1
        });
      });  
    }
    res.send({
      "reviews": reviews
    });
  });

  reviewsRouter.post('/', function(req, res) {
    res.status(201);
    res.send({
      "review":{"id":Math.floor(Math.random()*1000)}
    });
  });

  reviewsRouter.get('/:id', function(req, res) {
    var book;
    if(req.params.id == "1" || req.params.id == "2" || req.params.id == "3" ){
      book = 1
    }else if(req.params.id == "4" || req.params.id == "5" || req.params.id == "6" ){
      book = 2
    }
    res.send({
      "review": {
        "id": parseInt(req.params.id),
        "name": "Reviewer " + req.params.id,
        "comment": "comment " + req.params.id,
        "book":book
      }
    });
  });

  reviewsRouter.put('/:id', function(req, res) {
    res.send({
      "review": {
        "id": req.params.id
      }
    });
  });

  reviewsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/reviews', reviewsRouter);
};
