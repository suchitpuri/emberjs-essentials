import Ember from 'ember';

export default Ember.Object.extend({
  firstName: "",
  lastName: "",
  fullName: function(){
    console.log("fullName computed property called");
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName','lastName')
});
