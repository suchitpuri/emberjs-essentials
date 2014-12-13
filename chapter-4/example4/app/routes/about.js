import Ember from "ember";

export default Ember.Route.extend({
  renderTemplate: function(){
    this.render('about_sidebar',{
        outlet: "sidebar"
    });
    this.render('about')
  }
});