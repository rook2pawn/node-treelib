var test = require('tape');


test('search', function(t) {
  t.plan(3);
  var TreeLib = require('../index');
  var z = 
    { a : 
      { 
        b: {d:'foo',f:'bar'}, 
        c: {g : 'baz'}, 
        e: 'qux' 
      }
    };
  var tree = TreeLib(z);
  tree.search(function(value) {
    return (value == 'baz')
  }, function(isFound) {
    t.equal(isFound,true);
  });
  tree.search(function(value) {
    return (value == 'foo')
  }, function(isFound) {
    t.equal(isFound,true);
  });
  tree.search(function(value) {
    return (value == 'beep')
  }, function(isFound) {
    t.equal(isFound,false);
  });

})
