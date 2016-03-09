var pathToList= require('../lib/index').pathToList
var assert = require('assert')

assert.deepEqual(pathToList('a/b/c'), ['a','b','c'])
assert.deepEqual(pathToList('a'),['a'])


assert.deepEqual(pathToList('/a/b/c'), ['a','b','c'])
assert.deepEqual(pathToList('/a'),['a'])


assert.deepEqual(pathToList('/'),[])
assert.deepEqual(pathToList(''),[])


var treelib = require('../index')
var tree = treelib()
tree.path('/a/b/c/')
assert.deepEqual(tree.getValue('/'), {a:{b:{c:undefined}}})
assert.deepEqual(tree.getValue(''), {a:{b:{c:undefined}}})
