import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr("string"),
    organizationNameL: DS.attr("string"),
    address: DS.attr("string"),
    books: DS.hasMany("book")
 });
