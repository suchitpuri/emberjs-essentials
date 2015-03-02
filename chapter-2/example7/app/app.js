import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import user from './user';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

var myUser = user.create({
  firstName: "suchit",
  lastName: "puri"
});

console.log(myUser.get('fullName'));
myUser.set("firstName","Tony");
console.log(myUser.get('fullName'));

//output
//"fullName computed property called"
//"suchit puri"
//"suchit puri"



export default App;
