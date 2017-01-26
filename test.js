var Treelib = require('./index');
var z = { a : { b: {d:'foo',f:'bar'}, c: {g : 'baz'}, e: 'qux' }};
var tree = Treelib(z);
tree.search(function(value) {
  return (value == 'foo')
}, function(isFound) {
  console.log("Is Found?", isFound);
});

