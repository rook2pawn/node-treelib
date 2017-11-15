const lib = require('./lib');
const Treelib = function(tree) {

  if (!(this instanceof Treelib)) {
    return new Treelib(tree)
  }

  this.tree = tree || {};
  this.currentBranch = {};
};

Treelib.prototype.getValue = function(path) {

  let list = path.split('/');
  var branch = this.tree
  for (var i = 0; i < list.length; i++) {
    let curr = branch[list[i]];
    if (curr === undefined) {
      return undefined;
    }
    branch = curr;
  }
  return branch;
}

Treelib.prototype.getListValue = function(list) {

  var branch = this.tree
  for (var i = 0; i < list.length; i++) {
    let curr = branch[list[i]];
    if (curr === undefined) {
      return undefined;
    }
    branch = curr;
  }
  return branch;
}

Treelib.prototype.addPath = function(list) {

  let newPath = lib.createPath(list, {}, list.length)
  lib.merge(newPath,this.tree)
};

Treelib.prototype.addPathAndSetValue = function(list,value) {

  let newPath = lib.createPath(list, value, list.length)
  lib.merge(newPath,this.tree)
};

Treelib.prototype.setCurrentBranch = function(list) {

  let curr = this.tree;
  for (var i=0; i < list.length-1;i++) {
    curr = curr[list[i]];
  }
  this.currentBranch.branch = curr;
  this.currentBranch.key = list[list.length-1];
  return this
};

Treelib.prototype.setValue = function(val) {

  this.currentBranch.branch[this.currentBranch.key] = val;
  return this
};

Treelib.prototype.path = function (path) {

  let list = path.split('/');
  this.addPath(list);
  this.setCurrentBranch(list);
  return this
};

Treelib.prototype.pathAndSetValue = function (path,value) {

  let list = path.split('/');
  this.addPathAndSetValue(list,value);
  this.setCurrentBranch(list);
  return this
};

Treelib.prototype.pathListAndSetValue = function (list,value) {

  this.addPathAndSetValue(list,value);
  this.setCurrentBranch(list);
  return this
};


Treelib.prototype.get = function() {
  return this.tree
};

module.exports = exports = Treelib
