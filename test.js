var Treelib = require('./index');

var tree = new Treelib;

tree.path("a/b/c").setValue(4);
console.log(tree.get());
