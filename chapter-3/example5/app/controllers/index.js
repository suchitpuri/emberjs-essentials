import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions:{
    alert: function(){
      //do some controller level processing
      return true;
    }
  }
});