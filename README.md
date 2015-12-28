[![Build Status](https://travis-ci.org/rook2pawn/node-treelib.svg?branch=master)](https://travis-ci.org/rook2pawn/node-treelib)

treelib : create tree's as easy as .path('a/b/c')
=================================================

    var Treelib = require('treelib');
    var tree = Treelib();

    tree.path('a/b/c').setValue('foobar');

    // creates a nested tree
    > { a : { b : { c : 'foobar' }}}


.path(path) 
===========
'a/b/c' creates object {a : {b : { c : undefined }}}

.incr(path)
===========
increments a counter at path and returns the counter value

.leafs()
========
returns a list of all leafs 

.setValue(val)
==============
setValue sets a value on the current path. The current path is set after .path is called.

.getValue(path)
===============
getValue takes a path in the form of a string or array and returns
the value there. 

    tree.getValue('Music/The Smiths'); // {price:'$12.99',SKU:'24142'}

If the path doesn't exist or there is no value set
at that path, then it returns undefined. 

.getValue()
===========
returns the value at the current path.

    tree.path('Music/The Smiths').getValue(); // {price:'$12.99',SKU:'24142'}


.clearValue(path) 
=================
clearValue takes a path in the form of a string or array and clears the value at the end of that path

.checkPath(path) 
================

checkPath takes a path in the form of a string or array and returns how far it could walk down the tree.

    tree.path('a/b/c');	
    tree.checkPath('a/b/cauliflower');
    
    // {depth: 2, validPath: [ 'a', 'b' ] }


.show()
=======
Show the tree in the console.

.tree()
=======
Returns the tree itself.


node-treelib Copyright (c) 2010-2015 David Wee rook2pawn@gmail.com

Free software provided under the MIT License
http://opensource.org/licenses/mit-license.php
