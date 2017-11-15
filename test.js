var Treelib = require('./index');
var inspect = require('util').inspect;

var tree = new Treelib;

tree.path("a/b/c").setValue(4);
console.log(inspect(tree.get(), {depth:null}));
