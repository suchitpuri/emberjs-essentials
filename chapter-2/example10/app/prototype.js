
export default function(){
	console.log([1,2,3].get('lastObject')); //4

	var arr = [1,2,3,4,5,6,7].filter(function(item){
	  if(item < 5){
	    return true;
	  }
	});

	console.log(arr);//[1,2,3,4]

	console.log("ember.js".capitalize());//Ember.js
	console.log("my var".camelize());//myVar
	console.log("my var".classify());//MyVar

}