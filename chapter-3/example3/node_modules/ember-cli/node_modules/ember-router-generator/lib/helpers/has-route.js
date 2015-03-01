module.exports = function hasRoute(name, routes) {
  var route;

  for (var i = 0; i < routes.length; i++) {
    route = routes[i];

    if (route.expression.arguments[0].value === name) {
      return route;
    }
  }

  return false;
};
