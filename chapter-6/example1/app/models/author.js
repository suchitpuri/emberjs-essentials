import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),
  bio: DS.attr('string'),
  book: DS.hasMany('book')
});
