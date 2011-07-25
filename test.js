var Treelib = require('./index');
var tree = Treelib({a:{b:{d:'dog'}}});
tree.path('a/b/c').setValue(5);
tree.show();
tree.path('a/b/c').setValue('foobar');
tree.show();

tree.path('a/b/d').setValue('Donald');
tree.show();
tree.path('a/b/c').setValue('baz');
tree.show();


tree.getValue('a/b');
tree.getValue(['a']);
var tree2 = Treelib({a:{b:{c:'cat'}}});
console.log(tree2.checkPath('a/b/d'));
