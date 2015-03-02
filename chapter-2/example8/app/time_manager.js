import Ember from 'ember';

export default Ember.Object.extend({
  time:00,
  timeChanged: function(){
    //Do something when time changes
    console.log('time changed');
  }.observes('time')

});
