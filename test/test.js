var test = require('tape');
var Treelib = require('../index');
var tree = Treelib();

var pathA_array = ['a','b','c'];
var pathA_string = 'a/b/c';

var pathB_array = [2,3,5,7];
var pathB_string = '2/3/5/7';

var pathC_array = [2,3,'foo','bar'];
var pathC_string = '2/3/foo/bar';

var pathD_array = [2,'cat'];
var pathD_string = '2/cat';

var pathE_array = [2,'cat','dog'];
var pathE_string = '2/cat/dog';

test('basics', function (t) {
    t.plan(6);
    tree.path(pathA_string);
    t.deepEqual(tree.checkPath('a/b/cauliflower'),
      {depth:2,validPath:['a','b']})
    t.deepEqual(tree.checkPath('a/b/c'),
      {depth:3,validPath:['a','b','c']})
    t.deepEqual(tree.tree(), {a:{b:{c:undefined}}});
    tree.path(pathA_array);
    t.deepEqual(tree.checkPath('a/b/cauliflower'),
      {depth:2,validPath:['a','b']})
    t.deepEqual(tree.checkPath('a/b/c'),
      {depth:3,validPath:['a','b','c']})
    t.deepEqual(tree.tree(), {a:{b:{c:undefined}}});
});
test('overwrite',function(t) {
	t.plan(1);
	tree.clear();
	tree.path(pathB_string);
	tree.path(pathB_array);
	t.deepEqual(tree.tree(),{2:{3:{5:{7:undefined}}}});
})

test('branching',function(t) {
	t.plan(1);
	tree.clear();
	tree.path(pathB_string);
	tree.path(pathC_string);
	t.deepEqual(tree.tree(),{2:{3:{foo:{bar:undefined}, 5:{7:undefined}}}});
	
})

test('branching2',function(t) {
	t.plan(1);
	tree.clear();
	tree.path(pathD_string);
	tree.path(pathE_array);
	t.deepEqual(tree.tree(),{2:{cat:{dog:undefined}}});
})

test('set and clear values',function(t) {
  t.plan(5)
	tree.clear();
	tree.path(pathD_string);
	tree.setValue('meows');
	t.equal('meows',tree.getValue('2/cat'));
	t.equal('meows',tree.getValue(['2','cat']));
	tree.clearValue('2/cat');
	t.equal(undefined, tree.getValue(['2','cat']));
	tree.path('2/cat').setValue('karma');
	t.notEqual(undefined,tree.getValue('2/cat'));
	t.equal('karma',tree.getValue('2/cat'));
	// and mix in a path test
})
