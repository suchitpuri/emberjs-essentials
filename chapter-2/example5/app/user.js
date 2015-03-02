import Ember from 'ember';

export default Ember.Object.extend({
  firstName: "",
  lastName: "",
  fullName: function(){
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName','lastName')

});
