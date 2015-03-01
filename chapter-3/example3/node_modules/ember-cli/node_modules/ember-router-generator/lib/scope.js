module.exports = Scope;

function Scope() {
  this.__context__ = Object.create(null);
  this.__stack__ = [this.__context__];
}

Scope.prototype.has = function(key) {
  return key in this.__context__;
};

Scope.prototype.set = function(key, value) {
  return (this.__context__[key] = value);
};

Scope.prototype.get = function(key) {
  return this.__context__[key];
};

Scope.prototype.push = function() {
  this.__context__ = Object.create(this.__context__);
  this.__stack__.push(this.__context__);
};

Scope.prototype.pop = function() {
  this.__context__ = this.__stack__.pop();
};
