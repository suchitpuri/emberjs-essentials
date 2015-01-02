import Ember from "ember";

export default Ember.ArrayController.extend({
    needs:["product"],
    product: Ember.computed.alias("controllers.product")
});