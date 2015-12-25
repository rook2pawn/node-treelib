var Treelib = require('../index');
var assert = require('assert')
var tree = Treelib();

var pathA = 'a/b/c';

tree.path(pathA);
assert.deepEqual({depth:2,validPath:['a','b'],fullPath:false},tree.checkPath('a/b/cauliflower'))
assert.deepEqual({depth:1,validPath:['a'],fullPath:false},tree.checkPath('a/foo/bar'))
assert.deepEqual({depth:2,validPath:['a','b'],fullPath:true},tree.checkPath('a/b'))
