var Treelib = function(tree) {
	var self = {};
	if (tree === undefined) {
		tree = {};
	}
	var currentStem = {};
	var config = {};
	var checkPath_array = function(list) {
		var branch = tree; 
		var depth = 0;
		var validPath = [];
		var i = 0;
		for (i = 0; i < list.length; i++) {
			if (branch[list[i]] !== undefined) {
				validPath.push(list[i]);
				branch = branch[list[i]];
			} else {
				break;
			}
		}
		depth = i -1;
		return {depth:depth,validPath:validPath}
	};
	var checkPath_string = function(path) {
		var list = path.split('/');
		return checkPath_array(list.slice(0));
	};
	var addPath_array = function(list) {
		var rootLabel = list[0];
		if (tree[rootLabel] === undefined) {
			tree[rootLabel] = {};	
		}
		var result = checkPath_array(list);
		var branch = tree;
		if (list.length <= result.validPath.length) { 
			var i = 0;
			for (i = 0; i < list.length-1; i++) {
				branch = branch[list[i]];
			}
		} else {
			var i = 0;
			for (i = 0; i < result.validPath.length; i++) {
				branch = branch[result.validPath[i]];
			}
			branch[list[i]] = undefined;
		}
		currentStem.branch = branch;
		currentStem.path = list[i];
	};
	var addPath_string = function(path) {
		var list = path.split('/');
		addPath_array(list.slice(0));
	};
	var getValue_string = function(path) {
		var list = path.split('/');
		getValue_array(list.slice(0));	
	};
	var getValue_array = function(list) {
		var branch = tree;
		for (i = 0; i < list.length; i++) {
			branch = branch[list[i]];
		}
		console.log("getvalue:");
		console.log(branch);
		console.log("tree:" );
		console.log(tree);
	};
	self.add = function(path) {
		if (typeof path == 'string') {
			addPath_string(path);
		}
		else if (Array.isArray(path)) {
			addPath_array(path);
		}
		return self;
	};
	self.remove = function(path) {
		return self;
	};
	self.setValue = function(val) {
		currentStem.branch[currentStem.path] = val;
		return self;
	};
	self.getValue = function(path) {
		if (typeof path == 'string') {
			return getValue_string(path);
		}
		else if (Array.isArray(path)) {
			return getValue_array(path);
		}
	};
	self.path = function (path) {
		this.add(path);
		return self;
	};
	self.setConfig = function(obj) {
		for (var i in obj) {
			config[i] = obj[i];
		}
	}
	self.checkPath = function(path) {
		if (typeof path == 'string') 
			return checkPath_string(path)
		else if (Array.isArray(path))
			return checkPath_array(path)
	};
self.show = function() {
		console.log(tree);
		return self;
	};
	return self;
};
exports = module.exports = Treelib;
