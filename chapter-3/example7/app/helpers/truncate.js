import Ember from "ember"; 

export default function(value, options) {
  var length = 40;
  if(!Ember.isEmpty(options.hash.length)){
    length = options.hash.length;
  }
  if(!Ember.isEmpty(value)){
    if(value.length < length) {
      return value;
    }
    return value.substring(0, length) + "...";
  }
  return "";
};