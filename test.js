var Treelib = require('./index');
var tree = Treelib();

var z = { '3049a4': { '7a8ec4': 'jack', 'a27241' : 'bill' } }
var x = tree.toDescriptiveTree(z)
console.log(x)
