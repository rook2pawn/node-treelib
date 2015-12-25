var Treelib = require('../index');
var assert = require('assert')
var tree = Treelib();

var pathA_array = ['a','b','c'];
var pathA_string = 'a/b/c';

tree.path(pathA_string);
assert.deepEqual({depth:2,validPath:['a','b']},tree.checkPath('a/b/cauliflower'))
assert.deepEqual({depth:1,validPath:['a']},tree.checkPath('a/foo/bar'))
