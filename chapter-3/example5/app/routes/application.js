import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    alert: function(message){
      var applicationController = this.controllerFor("application"); 
      applicationController.set("className","alert"); applicationController.set("message",message);
      Ember.run.later(function(){
        applicationController.set("className","hide");
      },2000);
    }
  }
});