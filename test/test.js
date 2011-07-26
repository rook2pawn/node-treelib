var Treelib = require('../index');
var tree4 = Treelib();

var pathA_array = [2,3,4];
var pathA_string = '2/3/4';

var pathB_array = [2,3,5,7];
var pathB_string = '2/3/5/7';

var pathC_array = [4,1,420];
var pathC_string = '4/1/420';

var pathD_array = [2,'cat'];
var pathD_string = '2/cat';

var pathE_array = [2,'cat','dog'];
var pathE_string = '2/cat/dog';

exports.testPath = function(test) {
	test.expect(5);
		
	test.done();
};
