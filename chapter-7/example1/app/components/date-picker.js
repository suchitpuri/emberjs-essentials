import Ember from 'ember';

export default Ember.Component.extend({
 actions:{
   submit: function(){
    var date = this.$("input").val();
    this.sendAction('action',date);
   } 
 }
});