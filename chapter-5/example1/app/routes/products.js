import Ember from "ember";

export default Ember.Route.extend({
    model: function(){
        return [{ "name" : "Leather Jacket" , "description" : "A very long jacket desction which cannot be shon inside a table and will have to be shortened",
                  "currency": "USD" , "symbol": "$" , "price":"1999.999" , "dimensions": {"length": 7.0,"width": 12.0,"height": 9.5}},{ "name" : "Some Coat" , "description" : "A very long coat desction which cannot be shon inside a table and will have to be shortened",
                  "currency": "EURO" , "symbol": "€" , "price":"299.999","dimensions": {"length": 8.0,"width": 11.0,"height": 10.0}},{ "name" : "T Shirt" , "description" : "A very long T Shirt desction which cannot be shon inside a table and will have to be shortened",
                  "currency": "USD" , "symbol": "$" , "price":"58.999","dimensions": {"length": 9.0,"width": 13.0,"height": 11.0}},{ "name" : "White Shirt" , "description" : "A very long Shirt desction which cannot be shon inside a table and will have to be shortened",
                  "currency": "GBP" , "symbol": "£" , "price":"1999.9999","dimensions": {"length": 10.0,"width": 14.0,"height": 12.0}}
                ];
    }
});