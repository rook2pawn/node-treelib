[![Build Status](https://travis-ci.org/rook2pawn/node-treelib.svg?branch=master)](https://travis-ci.org/rook2pawn/node-treelib)

# treelib : create trees as easy as .path('a/b/c')

    const Treelib = require('treelib');
    var tree = new Treelib;
    tree.path('a/b/c').setValue('foobar');

    // { a : { b : { c : 'foobar' }}}

# about

This provides a simple way to generate trees.

# API

### constructor

#### var tree = new Treelib;

starts a new tree object

#### var tree = new Treelib(obj)

starts a new tree object starting with obj

### .path(string)

takes in a string such as "a/b/c"

### .pathList(array)

takes in an array such as ["a", "b", "c"]

### .get()

returns the tree

### .setValue(value)

sets value at current branch

## and that's it!

### license

node-treelib Copyright (c) 2010-2017 David Wee rook2pawn@gmail.com
MIT
Free software provided under the MIT License
http://opensource.org/licenses/mit-license.php
