// incidentally, does shrubs too :-)
var Treelib = function(tree) {
	var self = {};
	if (tree === undefined) 
		tree = {};
	var currentBranch = {};
	var config = {};
		
	var setCurrentBranch = function(list) {
		var branch = tree; 
		var i = 0;
		for (i = 0; i < list.length; i++) {
			if (branch[list[i]] !== undefined) {
				branch = branch[list[i]];
			} else {
				break;
			}
		}
		currentBranch.branch = branch;
		currentBranch.leaf = list[list.length-1];
	};
	var checkPath_array = function(list) {
		var branch = tree; 
		var depth = 0;
		var validPath = [];
		var i = 0;
		for (i = 0; i < list.length; i++) {
			if (branch !== undefined) { 
				validPath.push(list[i]);
			}
			if (branch[list[i]] !== undefined) {
				branch = branch[list[i]];
			} else {
				break;
			}
		}
		return {depth:validPath.length,validPath:validPath}
	};
	var checkPath_string = function(path) {
		var list = path.split('/');
		return checkPath_array(list.slice(0));
	};
	var createPath = function(list,obj) {
		var newobj = {};
		if (list.length == 0) {
			return obj;
		} else if (list.length > 0) {
			newobj[list[0]] = obj;
			list.shift();   
			return createPath(list,newobj);
		}       
	};
	var addPath_array = function(list) {
		var newPath = createPath(list.slice(0).reverse());
		merge(newPath,tree);	
		setCurrentBranch(list);
	};
	var addPath_string = function(path) {
		var list = path.split('/');
		addPath_array(list.slice(0));
	};
	var getValue_string = function(path) {
		var list = path.split('/');
		return getValue_array(list.slice(0));	
	};
	var getValue_array = function(list) {
		var result = checkPath_array(list);
		if (result.validPath.length < list.length) {
			return undefined
		}	
		var branch = tree;
		for (i = 0; i < list.length; i++) {
			branch = branch[list[i]];
		}
		return branch;
	};
	var merge = function (from,to) {
		Object.keys(from).forEach(function (key) {
			if ((to !== undefined) && (to[key] !== undefined)) {
				if (from[key] !== undefined) 
					merge(from[key], to[key])	
			} else if (to !== undefined)
				to[key] = from[key];
		});
	};
	var blend = function(obj1,obj2) {
		merge(obj1,obj2);
		merge(obj2,obj1);
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
	self.createPath = function(path,obj) {
		var obj = {};
		createPath(path.slice(0).reverse(),obj);
		return self;
	};
	self.setValue = function(val) {
		currentBranch.branch[currentBranch.leaf] = val;
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
	self.tree = function() {
		return tree;
	}
	return self;
};
exports = module.exports = Treelib;
