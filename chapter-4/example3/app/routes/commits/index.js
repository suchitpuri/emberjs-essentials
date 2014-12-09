import Ember from "ember";

export default  Ember.Route.extend({
  model: function() {
    var url = 'https://api.github.com/repos/emberjs/ember.js/commits';
    return Ember.$.getJSON(url);
  }
});