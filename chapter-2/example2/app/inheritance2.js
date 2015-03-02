import Ember from 'ember';

export default function(){
	var base = Ember.Object.extend({
		baseProperty: true
	});

	var derived = base.extend({});

	var derviedObject = derived.create({
		derivedProperty: true
	});

	console.log(derviedObject.get('baseProperty'));//true
	console.log(derviedObject.get('derivedProperty'));//true

	var anotherDerivedObject = derived.create();
	console.log(anotherDerivedObject.get('derivedProperty'));//undefined
}