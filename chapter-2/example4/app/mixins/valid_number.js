import Ember from 'ember';

export default Ember.Mixin.create({
    valid: function(number){
     	if(isNaN(number)){
	  		return false;
     	}else{
      		return true;
     	} 
    } 
});