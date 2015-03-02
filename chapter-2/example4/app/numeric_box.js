import Ember from 'ember';
import validNumberMixin from './mixins/valid_number';
import focusableMixin from './mixins/focusable';

export default Ember.Object.extend(validNumberMixin,focusableMixin,{
   text:""
});