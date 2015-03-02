	var base = Ember.Object.extend({
		baseProperty: true
	});

	var derived = base.extend({});

	var derviedObject = derived.create({
		derivedProperty: true
	});

	console.log(derviedObject.get('baseProperty'));
	console.log(derviedObject.get('derivedProperty'));

	var anotherDerivedObject = derived.create();
	console.log(anotherDerivedObject.get('derivedProperty'));