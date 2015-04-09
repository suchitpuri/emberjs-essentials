import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return { MRP:"$ 100",price:"$80",sale:"$20"};
    }
});
