import Ember from 'ember';

export default Ember.Component.extend({
 actions:{
   click: function(){
    var date = this.$("input").val();
    this.sendAction('action',date);
   } 
 }
});