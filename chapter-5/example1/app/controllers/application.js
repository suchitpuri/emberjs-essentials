import Ember from "ember";

export default Ember.Controller.extend({
  actions:{
    toggleMenu: function(){
     $("#wrapper").toggleClass("active");
    }

  }
  
});