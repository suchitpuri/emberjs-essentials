import Ember from "ember";

export default Ember.Route.extend({
    model: function(params){
      return {"id": 1, "name" : "Leather Jacket" , "description" : "A very long jacket desction which cannot be shown inside a table and will have to be shortened",
                  "currency": "USD" , "symbol": "$" , "price":"1999.999" , "dimensions": {"length": 7.0,"width": 12.0,"height": 9.5}}
    }
});