import Ember from 'ember';


export default Ember.ObjectController.extend({
  className:"red",
  actions:{
    toggleColor: function(){
      if(this.get("className") == "red"){
        this.set("className","blue");  
      }else{
        this.set("className","red");  
      }
      
    }
  }
});