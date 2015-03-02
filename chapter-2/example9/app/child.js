import Ember from 'ember';

export default Ember.Object.extend({
  school:'',
  father:null,
  address: Ember.computed.alias('father.address')
});
