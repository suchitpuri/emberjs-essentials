import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "img",
    attributeBindings: ["src","height","width"],
    src: "http://emberjs.com/images/logos/ember-logo.png",
    height:"80px",
    width:"200px"
});