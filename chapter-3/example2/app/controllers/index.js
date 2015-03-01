import Ember from 'ember';

export default Ember.ObjectController.extend({
  edit: true,
  actions:{
    changeEdit: function(){
      this.toggleProperty('edit');
    }
  }
});