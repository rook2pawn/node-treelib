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

test('setValue', function (t) {
  var tree = new Treelib;
  var pathA = 'a/b/c';
  t.plan(1);
  tree.path(pathA).setValue(4);
  t.deepEqual(tree.get(), {a: { b: {c: 4 }}})
});

test('getValue', function (t) {
  var tree = new Treelib({ a : { b : { d : 'hello'}}});
  var pathA = 'a/b/c';
  t.plan(1);
  tree.path(pathA);
  t.equal(tree.getValue('a/b/d'), 'hello')
});

test('getListValue', function (t) {
  var tree = new Treelib({ a : { b : { d : 'hello'}}});
  var pathA = 'a/b/c';
  t.plan(1);
  tree.path(pathA);
  t.equal(tree.getListValue(["a","b","d"]), 'hello');
});


test('pathAndSetValue', function (t) {
  var tree = new Treelib;
  var pathA = 'a/b/c';
  t.plan(1);
  tree.pathAndSetValue(pathA,4);
  t.deepEqual(tree.get(), {a: { b: {c: 4 }}})
});

test('pathListAndSetValue', function (t) {
  var tree = new Treelib;
  var pathA = ["a","b","c"];
  t.plan(1);
  tree.pathListAndSetValue(pathA,4);
  t.deepEqual(tree.get(), {a: { b: {c: 4 }}})
});
