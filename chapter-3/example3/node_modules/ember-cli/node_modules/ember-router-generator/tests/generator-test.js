var EmberRouterGenerator = require('../index.js');
var assert = require('assert');
var fs = require('fs');
var astEquality = require('./helpers/esprima-ast-equality');
var recast = require('recast');
var expect = require('chai').expect;


describe('Adding routes and resources', function() {
  it('adds resource', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos', {type: 'resource'});

    astEquality(recast.print(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-resource.js'));
  });

  it('adds routes', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');

    var routes = new EmberRouterGenerator(source);
    var newRoutes = routes.add('bar');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/bar-route.js'));
  });

  it('leaves untouched existing resources', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos', {type: 'resource'});

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-resource.js'));
  });

  it('leaves untouched existing routes', function() {
    var source = fs.readFileSync('./tests/fixtures/bar-route.js');

    var routes = new EmberRouterGenerator(source);
    var newRoutes = routes.add('bar');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/bar-route.js'));
  });

  it('add nested routes', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos/bar', {type: 'route'});

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-bar-route.js'));
  });

  it('add nested routes in existing nested route', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-bar-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos/bar/baz', {type: 'route'});

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-bar-baz-route.js'));
  });

  it('add nested resources', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos/bar', {type: 'resource'});

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-bars-route.js'));
  });

  it('supports nested routes', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('bar/baz', {type: 'route'});

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/bar-baz-route.js'));
  });

  it('supports deeply nested routes', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('bar/baz/foo', {type: 'route'});

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/bar-baz-foo-route.js'));
  });

  it('adds route with path', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('edit', {
      path: ':foo_id/edit', type: 'route'
    });

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/edit-foo-route.js'));
  });

  it('adds resource with path', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('friends', {
      path: 'account/friends', type: 'resource'
    });

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/friends-resource.js'));
  });

  it('adds nested route with path', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos/edit', {
      path: ':foo_id/edit'
    });

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-edit-route.js'));
  });
});


describe('Removing routes and resources', function() {
  it('removes resource', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.remove('foos', {type: 'resource'});

    astEquality(recast.print(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/basic-route.js'));
  });

  it('removes  routes', function() {
    var source = fs.readFileSync('./tests/fixtures/bar-route.js');

    var routes = new EmberRouterGenerator(source);
    var newRoutes = routes.remove('bar');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/basic-route.js'));
  });

  it('removes nested routes', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-bar-baz-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.remove('foos/bar/baz');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-bar-baz-remove-route.js'));
  });

  it('removes nested routes with children', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-bar-baz-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.remove('foos/bar');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-resource.js'));
  });

  it('removes resource with children', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-bar-baz-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.remove('foos');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/basic-route.js'));
  });

  it('removes nested resources', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-bars-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.remove('foos/bar');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/foos-resource.js'));
  });

  it('fails gracefully when removing a route that does not exist', function() {
    var source = fs.readFileSync('./tests/fixtures/missing-child-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.remove('baz/qux');

    astEquality(recast.prettyPrint(newRoutes.ast).code, fs.readFileSync('./tests/fixtures/missing-child-route.js'));
  });
});
