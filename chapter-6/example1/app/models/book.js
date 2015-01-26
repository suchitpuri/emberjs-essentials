import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  pages: DS.attr('number'),
  description: DS.attr('string'),
  authors: DS.hasMany('author'),
  publisher: DS.belongsTo('publisher'),
  reviews: DS.hasMany("review")
});
