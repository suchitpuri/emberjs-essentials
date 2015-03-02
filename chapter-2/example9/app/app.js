import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import father from './father';
import child from './child';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);


var darren = father.create({
  name:'Darren',
  age:40,
  address:'Brisbane'
});

var dan = child.create({
  school:'Brisbane State High School',
  father: darren
});

console.log(dan.get('address'));

darren.set('address','sydney');

console.log(dan.get('address'));

//Output
//Brisbane
//sydney



export default App;
