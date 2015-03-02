import Ember from 'ember';

export default function(){
	// Using Plain JavaScript
	console.log("using plain JavaScript");
	var base = {
		baseProperty: true 
	};
	var derived = Object.create(base);
	console.log(derived.baseProperty);


	// Using Ember.js
	console.log("using Ember.js");
	var base = Ember.Object.extend({
		baseProperty: true
	});
	
	var derived = base.extend({
		derivedProperty:false
	});
	
	var derviedObject = derived.create();
	
	console.log(derviedObject.get('baseProperty'));
	console.log(derviedObject.get('derivedProperty'));
}