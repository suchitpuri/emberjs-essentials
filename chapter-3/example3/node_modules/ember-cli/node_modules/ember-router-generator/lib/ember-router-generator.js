module.exports = EmberRouterGenerator;

var recast    = require('recast');
var traverse  = require('es-simpler-traverser');

var Scope     = require('./scope');
var DefineCallExpression = require('./visitors/define-call-expression.js');

var findFunctionExpression = require('./helpers/find-function-expression');
var hasRoute               = require('./helpers/has-route');
var newFunctionExpression  = require('./helpers/new-function-expression');
var resourceNode           = require('./helpers/resource-node');
var routeNode              = require('./helpers/route-node');

function EmberRouterGenerator(source, ast) {
  this.source = source;
  this.ast = ast;
  this.mapNode = null;
  this.scope = new Scope();

  this.visitors = {
    CallExpression: new DefineCallExpression(this.scope, this)
  };

  this._ast();
  this._walk();
}

EmberRouterGenerator.prototype.clone = function() {
  var route = new EmberRouterGenerator(this.source);

  return route;
};

EmberRouterGenerator.prototype._ast  = function() {
  this.ast = this.ast || recast.parse(this.source);
};

EmberRouterGenerator.prototype._walk  = function() {
  var scope = this.scope;
  var visitors = this.visitors;

  traverse(this.ast, {
    exit: function(node) {
      var visitor = visitors[node.type];

      if (visitor && typeof visitor.exit === 'function') {
        visitor.exit(node);
      }
    },

    enter: function(node) {
      var visitor = visitors[node.type];

      if (visitor && typeof visitor.enter === 'function') {
        visitor.enter(node);
      }
    }
  });
};

EmberRouterGenerator.prototype.add = function(routeName, options) {
  if (typeof this.mapNode === 'undefined') {
    throw new Error('Source doesn\'t include Ember.map');
  }

  var route = this.clone();
  var routes  = route.mapNode.arguments[0].body.body;

  route._add.call(
    route,
    routeName.split('/'),
    routes,
    options
  );

  return route;
};



EmberRouterGenerator.prototype._add = function(nameParts, routes, options) {
  options = options || {};
  var parent   =  nameParts[0];
  var name     = parent;
  var children = nameParts.slice(1);
  var route    = hasRoute(parent, routes);

  if (!route) {
    if (options.type === 'resource') {
      route = resourceNode(name, options);
      routes.push(route);
    } else {
      route = routeNode(name, options);
      routes.push(route);
    }
  }

  if (children.length > 0) {
    var routesFunction = findFunctionExpression(route.expression.arguments);

    if (!routesFunction) {
      routesFunction = newFunctionExpression();
      route.expression.arguments.push(routesFunction);
    }

    this._add(children, routesFunction.body.body, options);
  }
};

EmberRouterGenerator.prototype.remove = function(routeName) {
  if (typeof this.mapNode === 'undefined') {
    throw new Error('Source doesn\'t include Ember.map');
  }

  var route = this.clone();
  var routes  = route.mapNode.arguments[0].body.body;

  var newRoutes = route._remove.call(
    route,
    routeName.split('/'),
    routes
  );

  if (newRoutes) {
    route.mapNode.arguments[0].body.body = newRoutes;
  }

  return route;
};



EmberRouterGenerator.prototype._remove = function(nameParts, routes) {
  var parent   =  nameParts[0];
  var name     = parent;
  var children = nameParts.slice(1);
  var route    = hasRoute(parent, routes);
  var newRoutes;

  if (children.length > 0) {
    var routesFunction = route.expression && findFunctionExpression(route.expression.arguments);

    if (routesFunction) {
      newRoutes = this._remove(children, routesFunction.body.body);

      if (newRoutes) {
        routesFunction.body.body = newRoutes;
      }

      return routes;
    }
  } else {
    if (route) {
      routes = routes.filter(function(node) {
        return node !== route;
      });

      return routes;
    } else {
      return false;
    }
  }
};

EmberRouterGenerator.prototype.code = function(options) {
  options = options || { tabWidth: 2, quote: 'single' };

  return recast.print(this.ast, options).code;
};
