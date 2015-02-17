import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "p",
    classNames: ["static-class","another-static-class"],
    classNameBindings: ["intro","text","trueClass","falseClass"],
    intro: "intro-css-class",
    text: "text-css-class",
    trueClass: function(){
        //Do Some logic
        return true;
    }.property(),
    falseClass: false
});