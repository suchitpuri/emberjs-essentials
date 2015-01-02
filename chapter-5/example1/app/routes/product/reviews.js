import Ember from "ember";

export default Ember.Route.extend({
    model: function(){
        return ["This is a great jaket","Another Review","Awesome Jacket","Too pricy"];
    }
});