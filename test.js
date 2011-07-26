var Treelib = require('./index');
var tree4 = Treelib();
tree4.path([2,3,4]);
tree4.path([2,7,9]);
tree4.path([4,1,2]);
tree4.path([2,'cat']);
tree4.path([2,'cat','dog']);
console.log(tree4.checkPath('2/cat/dog'));
tree4.show();
