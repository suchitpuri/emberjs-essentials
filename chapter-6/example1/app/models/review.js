import DS from "ember-data";

export default DS.Model.extend({
    name: DS.attr("string"),
    comment:DS.attr("string"),
    book: DS.belongsTo("book")
});
