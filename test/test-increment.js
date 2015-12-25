var Treelib = require('../index');
var assert = require('assert')
var tree = Treelib();

var pathA = 'a/b/c';

var val = tree.incr(pathA)
assert.equal(1,val)
tree.show()

val = tree.incr(pathA)
tree.show()
assert.equal(2,val)
