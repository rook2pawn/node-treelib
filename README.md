treelib
=======

	var Treelib = require('treelib');
	var tree = Treelib();

	tree.path('a/b/c').setValue('foobar');

	// creates a nested tree
	> { a : { b : { c : 'foobar' }}}

treelib is EASY
===============

	Need I say more?

methods
=======

.path(string || array) 
----------------------
path takes a string or array to indicate a path, i.e.
'a/b/c' refers to this path {a : {b : { c : '' }}}

Treelib creates the path if it doesn't exist.

example: 

	tree.path(['foo','bar','baz']).setValue('PERL!');

	> {foo: {bar: {baz: 'PERL!'}}}

	tree.path('foo/bar/bitter').setValue('Randal Schwartz');

	> {foo: {bar: {baz: 'PERL!', bitter: 'Randal Schwartz'}}}


.setValue(val)
--------------
setValue sets a value on the current path. Just make sure
to use .path to set the current Path.

example:
	
	tree.path('Music/The Smiths').setValue({price:'$12.99',SKU:'24142'})

	> {Music:{'The Smiths':{price:'$12.99',SKU:'24142'}}}

.getValue(string || array)
-----------
getValue takes a path in the form of a string or array and returns
the value there. If the path doesn't exist or there is no value set
at that path, then it returns undefined

