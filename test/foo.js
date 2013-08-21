var Treelib = require('../index');
var tree = Treelib();

var pathA_array = ['a','b','c'];
var pathA_string = 'a/b/c';

tree.path(pathA_string);
console.log(tree.checkPath('a/b/cauliflower'));

//		{depth:2,validPath:['a','b']}, "Failed deep equal (test 1)");
