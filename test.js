var Treelib = require('./index');
var tree = Treelib();


var x = { b3a2f28d6c385b520f104d420286992c09f52653:    { b8ab45e55485cd147c04d91418d28f24fc0f4f92: { e94eedab31465ffc85f26da429f39ef12046b437: 'test' }, '64585d8b7570c46c6d5fadffd13187a4c68af0ec': { '9d13afc1f3ce8b5e0b01d52920265eeefa6dfc09': { '7d8b06e740e11f84be6beb58c5899e82b1968f87': 'hotfix' } } } }

console.log(x)

var traverse = require('traverse')

traverse(x).forEach(function(node) {
  if (this.isLeaf) {
    console.log(node)  
    console.log("Path:", this.path)
  }
})

/*
var pathA = ['b3a2f28d6c385b520f104d420286992c09f52653','b','c']
var pathB = 'a/d/f';

tree.path(pathA).setValue('c is my parent')
tree.path(pathB).setValue('f is my parent')

tree.show()
*/
