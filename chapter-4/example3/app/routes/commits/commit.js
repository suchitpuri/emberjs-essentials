import Ember from "ember";

export default Ember.Route.extend({
  model: function(params){
    console.log("model hook called");
    var url = 'https://api.github.com/repos/emberjs/ember.js/commits/'+ params.sha;
    return Ember.$.getJSON(url);
    
  },
  serialize: function(model){
    return {sha: model.sha};
  }
});

