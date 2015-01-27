import Ember from 'ember';

export default Ember.Route.extend({
   
   actions:{
        createBook: function(){
            var that = this;
           
            var publisher = that.store.createRecord("publisher",{
                "name": that.get("controller.name"),
                "organizationName": that.get("controller.organizationName"),
                "address": that.get("controller.address")
            });

            var author = that.store.createRecord("author",{
                "firstName": that.get("controller.firstName"),
                "lastName": that.get("controller.lastName"),
                "bio": that.get("controller.bio")
            });

            var book =  that.store.createRecord("book",{
                "title": that.get("controller.title"),
                "isbn": that.get("controller.isbn"),
                "pages": that.get("controller.pages"),
                "description": that.get("description")                
            });

            publisher.save().then(function(publisherFromDB){ 
                
                book.set("publisher",publisherFromDB);
                
                author.save().then(function(authorFromServer){
                    
                    //Set The Author to the books
                    book.get("authors").then(function(authors){
                        authors.pushObject(authorFromServer);
                    });

                    //Save the book 
                    book.save().then(function(book){
                        that.transitionTo('books.book',book);
                    });
                });
            });
            
        }
    }
});
