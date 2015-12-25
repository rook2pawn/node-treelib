var Treelib = require('../index');
var assert = require('assert')
var tree = Treelib();

var path = 'a/b/c';

tree.path(path).setValue({foo:'bar'})
assert.deepEqual({foo:'bar'},tree.getValue(path))
tree.clearValue(path)
assert.equal(undefined,tree.getValue(path))
