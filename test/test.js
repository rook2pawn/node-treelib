var test = require('tape');
var Treelib = require('../index');
var tree = Treelib();

var pathA = 'a/b/c';
var pathB = '2/3/5/7';
var pathC = '2/3/foo/bar';
var pathD = '2/cat';
var pathE = '2/cat/dog';

test('basics', function (t) {
    t.plan(3);
    tree.path(pathA);
    t.deepEqual(tree.checkPath('a/b/cauliflower'),
      {depth:2,validPath:['a','b'],fullPath:false})
    t.deepEqual(tree.checkPath('a/b/c'),
      {depth:3,validPath:['a','b','c'],fullPath:true})
    t.deepEqual(tree.tree(), {a:{b:{c:undefined}}});
});
test('overwrite',function(t) {
	t.plan(1);
	tree.clear();
	tree.path(pathB);
	t.deepEqual(tree.tree(),{2:{3:{5:{7:undefined}}}});
})

test('branching',function(t) {
	t.plan(1);
	tree.clear();
	tree.path(pathB);
	tree.path(pathC);
	t.deepEqual(tree.tree(),{2:{3:{foo:{bar:undefined}, 5:{7:undefined}}}});
	
})

test('branching2',function(t) {
	t.plan(1);
	tree.clear();
	tree.path(pathD);
	tree.path(pathE);
	t.deepEqual(tree.tree(),{2:{cat:{dog:undefined}}});
})

test('set and clear values',function(t) {
  t.plan(3)
	tree.clear();
	tree.path(pathD);
	tree.setValue('meows');
	t.equal('meows',tree.getValue('2/cat'));
	tree.clearValue('2/cat');
	tree.path('2/cat').setValue('karma');
	t.notEqual(undefined,tree.getValue('2/cat'));
	t.equal('karma',tree.getValue('2/cat'));
	// and mix in a path test
})
