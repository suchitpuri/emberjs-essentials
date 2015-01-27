module.exports = function(app) {
  var express = require('express');
  var authorsRouter = express.Router();
  var bodyParser = require('body-parser');  
  // parse application/json
  
  app.use(bodyParser.json());


  authorsRouter.get('/', function(req, res) {
    var authors = []
    if(req.query.ids){
      req.query.ids.forEach(function(element){
        authors.push({
          "id": parseInt(element),
          "firstName": "Author" + element,
          "lastName" : "LastName" + element,
          "bio": "Great Guy",
          "books":[1]
        });
      });  
    }
    
    res.send({
      "authors": authors
    });
  });

  authorsRouter.post('/', function(req, res) {
    res.status(201);
    res.send({
      "author":{
        "id":Math.floor(Math.random()*1000),
        "firstName": req.body.author.firstName
      }
    });
  });

  authorsRouter.get('/:id', function(req, res) {
    res.send({
      "author": {
        "id": req.params.id,
        "firstName": "firstName" + req.params.id,
        "lastName" : "LastName" + req.params.id,
        "bio": "Great Guy",
        "book":[1]
      }
    });
  });

  authorsRouter.put('/:id', function(req, res) {
    res.send({
      "authors": {
        "id": req.params.id
      }
    });
  });

  authorsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/authors', authorsRouter);
};
