import Ember from "ember";

export default Ember.Route.extend({
  renderTemplate: function(){
    this.render('sidebar',{
        outlet: "sidebar"
    });
    this.render('index')
  }
});