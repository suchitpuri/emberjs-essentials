import Ember from "ember";

export default Ember.ArrayController.extend({
    sortProperties: ['name'],
    sortAscending: true,
    itemController: 'product'
});