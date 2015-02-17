import Ember from 'ember';

export default Ember.Component.extend({
   showMoreText: false,
   actions:{
    toggleMore: function(){
        this.toggleProperty("showMoreText");
    }
   }
});