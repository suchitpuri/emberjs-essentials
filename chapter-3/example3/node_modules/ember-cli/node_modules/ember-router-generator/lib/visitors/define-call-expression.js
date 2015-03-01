module.exports = DefineCallExpression;

function DefineCallExpression(scope, petal) {
  this.scope = scope;
  this.petal = petal;
}

DefineCallExpression.prototype.enter = function(node) {
  if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'map') {
    this.petal.mapNode = node;
  }
};
