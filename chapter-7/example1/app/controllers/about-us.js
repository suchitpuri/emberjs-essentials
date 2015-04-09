import Ember from "ember"; 
export default Ember.ObjectController.extend({
    tagName: function(){
        //do some computation logic here
        return "p";
    }.property()
});