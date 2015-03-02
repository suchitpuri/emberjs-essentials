import Ember from 'ember';

export default Ember.Mixin.create({
   onFocus: function(){
     console.log("do something creative on focus");
   }
});