var lib = require('./lib')
var Treelib = function(tree) {
  if (!(this instanceof Treelib)) {
    return new Treelib(tree)
  }
	if (tree === undefined)
		this._tree = {}
  else 
    this._tree = tree
  var pathToList = function(path) {
    if (path.indexOf('/') === 0)
      path = path.slice(1)
		return path.split('/')
  }
	this.currentBranch = {}
	this.setCurrentBranch = function(list) {
    var branch = this._tree
    var i = 0
    for (i = 0; i < list.length; i++) {
        if (branch[list[i]] !== undefined) {
            branch = branch[list[i]]
        } else {
            break
        }
    }
    this.currentBranch.branch = branch
    this.currentBranch.leaf = list[list.length-1]
  }
  this.checkPath_array = function(list) {
    var branch = this._tree
    var depth = 0
    var validPath = []
    var i = 0
    for (i = 0; i < list.length; i++) {
      if (branch.hasOwnProperty(list[i])) {
        validPath.push(list[i])
      }
      if (branch[list[i]] !== undefined) {
        branch = branch[list[i]]
      } else {
        break
      }
    }
    return {depth:validPath.length,validPath:validPath}
  }
	this.checkPath_string = function(path) {
		var list = pathToList(path)
		return this.checkPath_array(list.slice(0))
	}
	var deletePath_array = function(list) {
		var branch = this._tree
	}
	this.addPath_array = function(list) {
		var newPath = lib.createPath(list.slice(0).reverse())
		lib.merge(newPath,this._tree)
		this.setCurrentBranch(list)
	}
	this.addPath_string = function(path) {
    var list = pathToList(path)
		this.addPath_array(list.slice(0))
	}
	this.getValue_string = function(path) {
		var list = pathToList(path)
		return this.getValue_array(list.slice(0))
	}
	this.getValue_array = function(list) {
		var result = this.checkPath_array(list)
		if (result.validPath.length < list.length) {
			return undefined
		}
		var branch = this._tree
		for (var i = 0; i < list.length; i++) {
			branch = branch[list[i]]
		}
		return branch
	}
	var blend = function(obj1,obj2) {
		lib.merge(obj1,obj2)
		lib.merge(obj2,obj1)
	}
	this.clearValue_string = function(path) {
		var list = pathToList(path)
		this.clearValue_array(list)
	}
	this.clearValue_array = function(list) {
		var result = this.checkPath_array(list)
		var branch = this._tree
		var i = 0
		for (i = 0; i < list.length; i++) {
			if (i < (list.length-1))
			branch = branch[list[i]]
		}
		branch[list[i-1]] = undefined
	}
	this.add = function(path) {
		if (typeof path == 'string') {
			this.addPath_string(path)
		}
		else if (Array.isArray(path)) {
			this.addPath_array(path)
		}
		return this
	}
	this.clearValue = function(path) {
		if (typeof path == 'string') {
			this.clearValue_string(path)
		}
		else if (Array.isArray(path)) {
			this.clearValue_array(path)
		}
		return this
	}
	this.setValue = function(val) {
		this.currentBranch.branch[this.currentBranch.leaf] = val
		this.currentBranch.val = val
    return this
	}
	this.getValue = function(path) {
		if (typeof path == 'string') {
			return this.getValue_string(path)
		} else if (Array.isArray(path)) {
			return this.getValue_array(path)
		} else if ((path === undefined) && (this.currentBranch.val !== undefined)) {
      // check to see if we have a current path
      // and return value from there.
      return this.currentBranch.val
    }
	}
	this.path = function (path) {
		this.add(path)
		return this
	}
	this.setConfig = function(obj) {
		for (var i in obj) {
			config[i] = obj[i]
		}
	}
	this.checkPath = function(path) {
		if (typeof path == 'string')
			return this.checkPath_string(path)
		else if (Array.isArray(path))
			return this.checkPath_array(path)
	}
	this.show = function() {
		console.log(this._tree)
		return this
	}
	this.tree = function() {
		return this._tree
	}
	this.clear = function() {
		this._tree = {}
		return this
	}
	this.history = function() {
		return history
	}
}
module.exports = exports = Treelib
