const lib = require('./lib');
const Treelib = function(tree) {

  if (!(this instanceof Treelib)) {
    return new Treelib(tree)
  }

  this.tree = tree || {};
	this.currentBranch = {};
};

Treelib.prototype.setCurrentBranch = function(list) {

  var branch = this.tree
  for (var i = 0; i < list.length; i++) {
    var curr = branch[list[i]]
    if ((curr !== undefined) && (typeof curr =='object')) {
        branch = curr
    } else {
        break
    }
  }
  this.currentBranch.branch = branch;
  this.currentBranch.leaf = list[list.length-1];
};

Treelib.prototype.addPath = function(path) {
  let list = path.split('/');
	let newPath = lib.createPath(list, {}, list.length)
	lib.merge(newPath,this.tree)
	this.setCurrentBranch(path)
};

Treelib.prototype.setValue = function(val) {

	this.currentBranch.branch[this.currentBranch.leaf] = val
	this.currentBranch.val = val
  return this
}
Treelib.prototype.path = function (path) {

  this.addPath(path);
  this.setCurrentBranch(path)
	return this
};

Treelib.prototype.get = function() {
	return this.tree
};

module.exports = exports = Treelib
