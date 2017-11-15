var test = require('tape');
var Treelib = require('../index');

test('basics', function (t) {
  var tree = new Treelib;
  var pathA = 'a/b/c';
  t.plan(1);
  tree.path(pathA);
  t.deepEqual(tree.get(), {a: { b: {c: {} }}})
});

test('with starting tree', function (t) {
  var tree = new Treelib({ a : { b : { d : 'hello'}}});
  var pathA = 'a/b/c';
  t.plan(1);
  tree.path(pathA);
  t.deepEqual(tree.get(), {a: { b: {c: {}, d : 'hello' }}})
});
